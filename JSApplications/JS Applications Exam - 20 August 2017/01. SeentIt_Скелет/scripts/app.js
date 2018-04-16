$(()=>{
    auth.attachNotificationEvents();

    const app = Sammy('#container', function () {
        this.use('Handlebars','hbs')

        this.get('#/index.html',(ctx)=>{
           ctx.loadPartials({
               header: './templates/common/header.hbs',
               footer: './templates/common/footer.hbs',
           }).then(function () {
               this.partial('./templates/home.hbs')
           })
        })

        this.get('#/logout',(ctx)=>{
            auth.logout()
                .then(()=>{
                    auth.showInfo('Logout successfully!');
                    sessionStorage.clear();
                    ctx.redirect('#/index.html')
                }).catch((err)=>{
                auth.handleError(err)
            })
        })

        this.post('#/register',(ctx)=>{
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repPass = ctx.params.repeatPass;

            auth.register(username,password)
                .then((userData)=>{
                    auth.saveSession(userData)
                    auth.showInfo('Register Successfull');
                    ctx.redirect('#/catalog')
                }).catch((err)=>{
                auth.handleError(err)
            })
        })

        this.post('#/login',(ctx)=>{
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username,password)
                .then((userData)=>{
                    auth.saveSession(userData)
                    auth.showInfo('Login Successfull');
                    ctx.redirect('#/catalog')
                }).catch((err)=>{
                auth.handleError(err)
            })
        })

        this.get('#/catalog',(ctx)=>{
            let endpoint = 'posts?query={}&sort={"_kmd.ect": -1}';
            requester.get('appdata',endpoint,'kinvey')
                .then((posts)=>{
                    posts.map((a)=>a.submitTime = auth.calcTime(a._kmd.ect));
                    console.log(posts);
                    posts.map((a)=>a.isAuthor=sessionStorage.getItem('userId')===a._acl.creator);
                    posts.map((a,i)=>a.rank=i+1);
                    ctx.posts = posts;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = sessionStorage.getItem('authtoken')!==null;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        menu: './templates/menu.hbs',
                        post: './templates/post.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog.hbs')
                    })
                })
        })

        this.get('#/create',(ctx)=>{
            ctx.isAuth = sessionStorage.getItem('authtoken')!==null;
            ctx.username = sessionStorage.getItem('username')
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                menu: './templates/menu.hbs'
            }).then(function () {
                this.partial('./templates/submit.hbs')
            })
        })

        this.post('#/create',(ctx)=>{
            let data = {
                author: sessionStorage.getItem('username'),
                url: ctx.params.url,
                title: ctx.params.title,
                imageUrl: ctx.params.image,
                description: ctx.params.comment
            };


            requester.post('appdata','posts','kinvey',data)
                .then(()=>{
                auth.showInfo('Post created successfully!')
                    ctx.redirect('#/catalog')
                }).catch((err)=>{
                auth.handleError(err)
            })
        })

        this.get('#/delete/:id',(ctx)=>{
            let id = ctx.params.id;
            id = id.slice(1);

            requester.remove('appdata',`posts/${id}`,'kinvey')
                .then(()=>{
                auth.showInfo('Post deleted successfully!');
                    ctx.redirect('#/catalog')
                }).catch((err)=>{
                auth.handleError(err)
            })
        })

        this.get('#/edit/:id',(ctx)=>{
            ctx.isAuth = sessionStorage.getItem('authtoken')!==null;
            ctx.username = sessionStorage.getItem('username')
            let id = ctx.params.id;
            id = id.slice(1);
            requester.get('appdata',`posts/${id}`,'kinvey')
                .then((post)=>{
                    ctx.postData = post;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        menu: './templates/menu.hbs'
                    }).then(function () {
                        this.partial('./templates/viewedit.hbs')
                    })
                })

        })

        this.post('#/edit/:id',(ctx)=>{
            let id = ctx.params.id;
            id = id.slice(1);

            data = {
                imageUrl: ctx.params.image,
                url: ctx.params.url,
                author: sessionStorage.getItem('username'),
                description: ctx.params.description,
                title: ctx.params.title
            }

            requester.update('appdata',`posts/${id}`,'kinvey',data)
                .then(()=>{
                    auth.showInfo('Post Updated Successfully!')
                    ctx.redirect('#/catalog')
                })
                .catch((err)=>{
                auth.handleError(err)
                })
        })

        this.get('#/comments/:id',(ctx)=>{
            ctx.isAuth = sessionStorage.getItem('authtoken')!==null;
            ctx.username = sessionStorage.getItem('username')
            let id = ctx.params.id
            id = id.slice(1);
            ctx.hasDesc = false;


            requester.get('appdata',`posts/${id}`,'kinvey')
                .then((post)=>{
                    ctx.postData = post;
                    ctx.submitTime = auth.calcTime(post._kmd.ect);
                    ctx.isAuthor = sessionStorage.getItem('userId')===post._acl.creator;
                    if(post.description!==''){
                        ctx.hasDesc=true;
                    }

                    requester.get('appdata',`comments?query={"postId":"${id}"}&sort={"_kmd.ect": -1}`,'kinvey')
                        .then((comments)=>{
                            comments.map((a)=>a.submitTime = auth.calcTime(a._kmd.ect))
                            comments.map((a)=>a.authorOnComment = a._acl.creator===sessionStorage.getItem('userId'))
                            ctx.comments = comments
                            ctx.loadPartials({
                                header: './templates/common/header.hbs',
                                footer: './templates/common/footer.hbs',
                                comment: './templates/comment.hbs',
                                menu: './templates/menu.hbs'
                            }).then(function () {
                                this.partial('./templates/comments.hbs')
                            })
                        })

                })
        })

        this.post('#/createComment/:postId',(ctx)=>{
            let id = ctx.params.postId;
            id = id.slice(1);
            data = {
                content: ctx.params.content,
                author: sessionStorage.getItem('username'),
                postId: id
            }
            requester.post('appdata','comments','kinvey',data)
                .then(()=>{
                    auth.showInfo('Comment added successfully!')
                    ctx.redirect(`#/comments/:${id}`)
                }).catch((err)=>auth.handleError(err))
        })

        this.get('#/deleteComment/:commentId',(ctx)=>{
            let id = ctx.params.commentId;
            id = id.slice(1);
            requester.get('appdata',`comments/?query={"_id":"${id}"}`,'kinvey')
                .then((res)=>{

                    let postId = res[0].postId
                    requester.remove('appdata',`comments/${id}`,'kinvey')
                        .then(()=>{
                            auth.showInfo('Comment deleted successfully!');
                            ctx.redirect(`#/comments/:${postId}`)
                        }).catch((reason)=>{
                        auth.handleError(reason)
                    })
                })


        })

        this.get('#/viewMyPosts',(ctx)=>{
            let myId = sessionStorage.getItem('userId');
            let endpoint = `posts/?query={"_acl.creator":"${myId}"}&sort={"_kmd.ect": -1}`;
            requester.get('appdata',endpoint,'kinvey')
                .then((posts)=>{
                    posts.map((a)=>a.submitTime = auth.calcTime(a._kmd.ect));
                    console.log(posts);
                    posts.map((a)=>a.isAuthor=sessionStorage.getItem('userId')===a._acl.creator);
                    posts.map((a,i)=>a.rank=i+1);
                    ctx.posts = posts;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = sessionStorage.getItem('authtoken')!==null;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        menu: './templates/menu.hbs',
                        post: './templates/post.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog.hbs')
                    })
                })
        })
    });



    app.run();
})