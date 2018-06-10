$(() => {
    const app = Sammy('#main',function () {
        this.use('Handlebars', 'hbs');



        this.get('#/index.html',(ctx)=>{
            ctx.isAuth = auth.isAuth();
            $.get('data.json').then((contacts)=>{
                ctx.contacts = contacts;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    contactsPage: './templates/contacts/contactsPage.hbs',
                    contactsList: './templates/contacts/contactsList.hbs',
                    contactDetails: './templates/contacts/contactDetails.hbs',
                    contact: './templates/contacts/contact.hbs',
                    loginForm: './templates/forms/loginForm.hbs'
                }).then(function () {
                    ctx.partials = this.partials;
                    render();
                });

                function render() {
                    ctx.partial('./templates/welcome.hbs').then(attachEvents);
                }

                function attachEvents() {
                    $('.contact').on('click',(e)=>{
                        let i = $(e.target).attr('data-id');

                        ctx.selected = ctx.contacts[i];
                        render();
                    })
                }
            })

        });

        this.get('#/register',(ctx)=>{
            ctx.isAuth = auth.isAuth();
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {

                this.partial('./templates/forms/registerForm.hbs')
            })
        })

        this.post('#/register',(ctx)=>{
            let username = ctx.params.username;
            let pass = ctx.params.pass;
            let passR = ctx.params.passR;

            if(pass!==passR){
                alert('Pass do not match')
            }else{
                auth.register(username,pass);

                ctx.redirect('#/index.html')
            }
        })

        this.post('#/login',(ctx)=>{
            let username = ctx.params.user;
            let pass = ctx.params.pass;
            auth.login(username,pass).then((userData)=>{
                auth.saveSession(userData)
                ctx.redirect('#/index.html')
            }).catch(console.error);


        })
    })

    app.run()
});