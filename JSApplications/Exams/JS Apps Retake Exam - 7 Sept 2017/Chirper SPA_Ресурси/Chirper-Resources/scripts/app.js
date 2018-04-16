$(()=>{
    auth.attachNotificationEvents();

    const app = Sammy('#main', function () {
        this.use('Handlebars','hbs');

        this.get('#/skeleton.html',loadHome);

        this.get('skeleton.html',loadHome);

        function loadHome(ctx) {
            let isAuth = auth.isAuth();
            console.log(auth.isAuth());
            if(!isAuth){
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer:'./templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/login.hbs')
                })
            }
            else{
                ctx.redirect('#/feed')
            }
        }



        this.post('#/login',(ctx)=>{
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username,password)
                .then((userData)=>{
                    auth.showInfo('User logged in successfully!');
                    auth.saveSession(userData);
                    ctx.redirect('#/feed')
                })
                .catch((err)=>{
                    auth.handleError(err)
                })
        })

        this.get('#/register',(ctx)=>{
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/register.hbs')
            })
        })

        this.post('#/register',(ctx)=>{
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repPass = ctx.params.repeatPass;

            auth.register(username,password)
                .then((userData)=>{
                console.log(userData);
                    auth.showInfo('User registered in successfully!');
                    auth.saveSession(userData);
                    ctx.redirect('#/feed')

                })
                .catch((err)=>{
                    auth.handleError(err)
                })
        })

        this.get('#/logout',(ctx)=>{
            auth.logout()
                .then(()=>{
                    sessionStorage.clear();
                    auth.showInfo('User loggout successfully!');
                    ctx.redirect('#/skeleton.html')

                })
                .catch((err)=>{
                    auth.handleError(err)
                })
        })



        this.get('#/feed',(ctx)=>{
            ctx.username = sessionStorage.getItem('username');
            async function loadInfo() {
                let user = await requester.get('user',`?query={"username":"${sessionStorage.getItem('username')}"}`,'kinvey');

                let subs =user[0].subscriptions;


                let followingC  =subs.length;
                let chirpsP = requester.get('appdata',`chirps?query={"author":{"$in": ${JSON.stringify(subs)}}}&sort={"_kmd.ect": 1}`,'kinvey');
                let chirpsCountP = requester.get('appdata',`chirps?query={"author":"${sessionStorage.getItem('username')}"}`,'kinvey');
                let followersP = requester.get('user',`?query={"subscriptions":"${sessionStorage.getItem('username')}"}`,'kinvey');
                let [chirpsInfo,ownChirpsInfo,followersInfo] = await Promise.all([chirpsP,chirpsCountP,followersP]);

                chirpsInfo.map((a)=>a.submitAgo=auth.calcTime(a._kmd.ect))

                ctx.chirps = chirpsInfo;
                ctx.chirpsC = ownChirpsInfo.length;
                ctx.following = followingC;
                ctx.followers = followersInfo.length;
            }

            loadInfo()
                .then(()=>{

                    ctx.loadPartials({
                        menu: './templates/menu.hbs',
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        chirp: './templates/chirp.hbs'
                    }).then(function () {
                        this.partial('./templates/feed.hbs')
                    })
                }).catch((err)=>{

                auth.handleError(err)
            })
        })



        this.post('#/feed',(ctx)=>{
            let data = {
                text: ctx.params.text,
                author: sessionStorage.getItem('username')
            }

            requester.post('appdata','chirps','kinvey',data)
                .then(()=>{
                    auth.showInfo('Chirp created successfully!')
                    ctx.redirect(`#/viewMe`)
                })
        })

        this.get('#/viewMe',(ctx)=>{
            ctx.username=  sessionStorage.getItem('username')
            console.log('tuk')
            async function loadInfo() {
                let user = await requester.get('user',`?query={"username":"${sessionStorage.getItem('username')}"}`,'kinvey');

                let subs =user[0].subscriptions;


                let followingC  =subs.length;
                let chirpsP = requester.get('appdata',`chirps?query={"author":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": 1}`,'kinvey');
                let chirpsCountP = requester.get('appdata',`chirps?query={"author":"${sessionStorage.getItem('username')}"}`,'kinvey');
                let followersP = requester.get('user',`?query={"subscriptions":"${sessionStorage.getItem('username')}"}`,'kinvey');
                let [chirpsInfo,ownChirpsInfo,followersInfo] = await Promise.all([chirpsP,chirpsCountP,followersP]);

                chirpsInfo.map((a)=>a.submitAgo=auth.calcTime(a._kmd.ect));
                chirpsInfo.map((a)=>a.isAuth=true)

                ctx.chirps = chirpsInfo;
                ctx.chirpsC = ownChirpsInfo.length;
                ctx.following = followingC;
                ctx.followers = followersInfo.length;
            }

            loadInfo()
                .then(()=>{
                    ctx.loadPartials({
                        menu: './templates/menu.hbs',
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        chirp: './templates/chirp.hbs'
                    }).then(function () {
                        this.partial('./templates/feed.hbs')
                    })
                }).catch((err)=>{
                auth.handleError(err)
            })
        })

        this.get('#/feed/:author',(ctx)=>{
           let author = ctx.params.author;
           author = author.slice(1);
            async function loadInfo() {
                let myUser = await requester.get('user',`?query={"username":"${sessionStorage.getItem('username')}"}`,'kinvey');
                let user = await requester.get('user',`?query={"username":"${author}"}`,'kinvey');
                console.log(user)
                let subs =user[0].subscriptions;
                let username = user[0].username;
                ctx.username = username;

                if(myUser[0].subscriptions.includes(username)){
                    ctx.isFollowed = true;
                }


                let followingC  =subs.length;
                let chirpsP = requester.get('appdata',`chirps?query={"author":"${author}"}&sort={"_kmd.ect": 1}`,'kinvey');
                let chirpsCountP = requester.get('appdata',`chirps?query={"author":"${author}"}`,'kinvey');
                let followersP = requester.get('user',`?query={"subscriptions":"${username}"}`,'kinvey');
                let [chirpsInfo,ownChirpsInfo,followersInfo] = await Promise.all([chirpsP,chirpsCountP,followersP]);

                chirpsInfo.map((a)=>a.submitAgo=auth.calcTime(a._kmd.ect));
                chirpsInfo.map((a)=>a.isAuth=false)

                ctx.chirps = chirpsInfo;
                ctx.chirpsC = ownChirpsInfo.length;
                ctx.following = followingC;
                ctx.followers = followersInfo.length;
            }

            loadInfo()
                .then(()=>{
                    ctx.loadPartials({
                        menu: './templates/menu.hbs',
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        chirp: './templates/chirp.hbs'
                    }).then(function () {
                        this.partial('./templates/viewProfile.hbs')
                    })
                }).catch((err)=>console.log(err))
        })

        this.get('#/delete/:id',(ctx)=>{
            let id = ctx.params.id;
            id = id.slice(1);
            requester.remove('appdata',`chirps/${id}`,'kinvey')
                .then(()=>{
                    ctx.redirect('#/viewMe')
                    auth.showInfo('chirp Deleted')
                })
        })

        this.get('#/follow/:username',(ctx)=>{
            let username = ctx.params.username;
            username = username.slice(1);
            requester.get('user',`?query={"username":"${sessionStorage.getItem('username')}"}`,'kinvey')
                .then((userData)=>{
                    let subs = userData[0].subscriptions;
                    console.log(subs)

                    subs.push(username);

                    let data = {
                        subscriptions: subs
                    }

                    requester.update('user',sessionStorage.getItem('userId'),'kinvey',data)
                        .then(()=>{
                            auth.showInfo('User followed correctly')
                            ctx.redirect('#/feed')
                        }).catch((err)=>auth.handleError(err))
                }).catch((err)=>auth.handleError(err))

        })

        this.get('#/unfollow/:username',(ctx)=>{
            let username = ctx.params.username;
            username = username.slice(1);
            requester.get('user',`?query={"username":"${sessionStorage.getItem('username')}"}`,'kinvey')
                .then((userData)=>{
                    let subs = userData[0].subscriptions;
                    console.log(subs);

                    let i = subs.indexOf(username);
                    subs.splice(i, 1);


                    let data = {
                        subscriptions: subs
                    }

                    requester.update('user',sessionStorage.getItem('userId'),'kinvey',data)
                        .then(()=>{
                            auth.showInfo('User unfollowed correctly')
                            ctx.redirect('#/feed')
                        }).catch((err)=>auth.handleError(err))
                }).catch((err)=>auth.handleError(err))

        })

        this.get('#/discover',(ctx)=>{
            let users = []
            requester.get('user','','kinvey')
                .then((res)=>{
                console.log(res)

                    for (let user of res) {
                        if (user.username !== sessionStorage.getItem('username')) {
                            user.followers = res
                                .filter(c => c.subscriptions.includes(user.username)).length;
                            users.push(user);
                        }
                    }
                    console.log(users)

                    ctx.users = users;
                    ctx.loadPartials({
                        menu: './templates/menu.hbs',
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        user: './templates/user'
                    }).then(function () {
                        this.partial('./templates/discover.hbs')
                    })
                }).catch((err)=>auth.handleError(err))
        })
    });



    app.run();
})