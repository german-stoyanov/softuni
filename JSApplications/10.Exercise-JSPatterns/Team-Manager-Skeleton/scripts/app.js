$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');



        this.get('index.html',(ctx)=>{

            ctx.teamId = sessionStorage.getItem('teamId');
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.hasTeam = sessionStorage.getItem('teamId')!==null;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/home.hbs')
            })
        })

        this.get('#/login',(ctx)=>{
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs')
            })
        })

        this.post('#/login',(ctx)=>{
            let name = ctx.params.username;
            let pass = ctx.params.password;
            auth.login(name,pass)
                .then((userData)=>{
                    console.log(userData);
                    auth.saveSession(userData);
                    auth.showInfo('Login Successful!')
                    ctx.redirect('#/index.html');
                }).catch((err)=>auth.handleError(err))
        })

        this.get('#/register',(ctx)=>{
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs')
            })

        });

        this.post('#/register',(ctx)=>{
            let name = ctx.params.username;
            let pass = ctx.params.password;
            let pass2 = ctx.params.repeatPassword;
            if(pass===pass2){
                console.log(pass2)
                console.log(pass)
                auth.register(name,pass)
                    .then((userData)=>{
                        auth.saveSession(userData);
                        auth.showInfo('Register Successful!');
                        ctx.redirect('#/index.html')
                    }).catch((err)=>auth.handleError(err))
            }
            else {
                auth.showError('Parolite Ne Pasvat')
            }
        })

        this.get('#/logout',(ctx)=>{
            auth.logout()
                .then(()=>{
                    sessionStorage.clear();
                    auth.showInfo('Logout Successful!');
                    ctx.redirect('#/index.html')
                })
                .catch((err)=>{
                    auth.handleError(err);
                })
        })

        this.get('#/home',(ctx)=>{
            ctx.teamId = sessionStorage.getItem('teamId');
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.hasTeam = sessionStorage.getItem('teamId')!==null;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/home.hbs')
            })
        })

        this.get('#/catalog',(ctx)=>{
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            teamsService.loadTeams()
                .then((teams)=>{
                    ctx.teams = teams.reverse();
                    ctx.hasNoTeam = sessionStorage.getItem('teamId')===null;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        team: './templates/catalog/team.hbs',


                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs')
                    })
                })


        })

        this.get('#/create',(ctx)=>{

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs',

            }).then(function () {
                this.partial('./templates/create/createPage.hbs')
            })
        })

        this.post('#/create',(ctx)=>{
            let name = ctx.params.name;
            let comment = ctx.params.comment;
            teamsService.createTeam(name,comment)
                .then((res)=>{

                    let id = res._id
                    let userData = {
                        username: sessionStorage.getItem('username'),
                        teamId: id
                    };

                    requester.update('user', sessionStorage.getItem('userId'),'kinvey',userData);
                    sessionStorage.setItem('teamId',res._id);
                    auth.showInfo('Team created successfully!');
                    ctx.redirect('#/home')
                })
        })

        this.get('#/catalog/:teamId',(ctx)=>{
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.isOnTeam = false;
            ctx.isAuthor = false;

            requester.get('user','','kinvey').then((members)=>{
                let id = ctx.params.teamId;
                id = id.slice(1);

                ctx.members = members.filter((a)=>a.teamId===id)

                teamsService.loadTeamDetails(id).then((team)=>{
                    console.log('ot basata')
                    console.log(team._id);



                    console.log(sessionStorage.getItem('teamId'));
                    if(team._id === sessionStorage.getItem('teamId')){
                        ctx.isOnTeam = true
                    }
                    if(team._acl.creator===sessionStorage.getItem('userId')){
                        ctx.isAuthor = true;
                    }
                    ctx.teamId = team._id;
                    ctx.name = team.name;
                    ctx.comment = team.comment;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        teamMember: './templates/catalog/teamMember.hbs',
                        teamControls: './templates/catalog/teamControls.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/details.hbs')
                    })
                })
            });





        })

        this.get('#/edit/:teamId',(ctx)=>{
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            let id = ctx.params.teamId;
            id = id.slice(1);

            ctx.teamId = id



            teamsService.loadTeamDetails(id).then((team)=>{

                ctx.name = team.name;
                ctx.comment = team.comment;

                ctx.loadPartials({
                    editForm: './templates/edit/editForm.hbs',
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/edit/editPage.hbs')
                })
            })
        })

        this.post('#/edit/:teamId',(ctx)=>{
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            let teamId = ctx.params.teamId;
            teamId = teamId.slice(1);
            console.log(teamId)


            let comment = ctx.params.comment;
            let name = ctx.params.name;

            teamsService.edit(teamId,name,comment).then(()=>{
                auth.showInfo('Team Edited Successfully!');
                ctx.redirect('#/home')
            }).catch((reason)=>{
                auth.handleError(reason)
            })

        })

        this.get('#/leave',(ctx)=>{
            teamsService.leaveTeam().then((userData)=>{
                auth.showInfo('team leaved successfully');
                sessionStorage.clear();
                auth.saveSession(userData)
                ctx.redirect('#/home')
            })
        })

        this.get('#/join/:teamId',(ctx)=>{
            let id = ctx.params.teamId
            id = id.slice(1);
            teamsService.joinTeam(id).then((userData)=>{
                auth.showInfo('team joined successfully');
                sessionStorage.clear();
                auth.saveSession(userData)
                ctx.redirect('#/home')
            })
        })

        this.get('#/about',(ctx)=>{
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/about/about.hbs')
            })
        })

    });

    app.run();
});