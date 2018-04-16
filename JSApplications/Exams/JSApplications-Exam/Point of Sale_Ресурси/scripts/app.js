$(()=>{
    auth.attachNotificationEvents();

    const app = Sammy('#container', function () {
        this.use('Handlebars','hbs');

        this.get('index.html',(ctx)=>{
            ctx.auth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            if(auth.isAuth()){
                ctx.redirect('#/')
            }
            else {
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial('./templates/welcome.hbs')
                })
            }
        });

        this.get('#/index.html',(ctx)=>{
            ctx.auth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            if(auth.isAuth()){
                ctx.redirect('#/')
            }
            else {
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial('./templates/welcome.hbs')
                })
            }
        });

        this.get('#/logout',(ctx)=>{
            auth.logout()
                .then(()=>{
                    auth.showInfo('user logged out');
                    sessionStorage.clear();
                    ctx.redirect('#/index.html')
                }).catch((err)=>auth.handleError(err))
        });

        this.post('#/register',(ctx)=>{
            let username = ctx.params['username-register'];
            let password = ctx.params['password-register'];
            let passwordP = ctx.params['password-register-check'];

            if(password===''||passwordP==='') {
                auth.showError('Passwords must not be empty!')
            }
            else if(password!==passwordP){
                auth.showError('both Passwords must match!')
            }
            else if(typeof username!=="string"){
                auth.showError('Username must be string!')
            }
            else if(username.length<5){
                auth.showError('Username must be at least 5 characters!')
            }
            else{
                auth.register(username,password)
                    .then((userData)=>{
                        auth.showInfo('Register Successful');
                        auth.saveSession(userData);
                        ctx.redirect('#/home');
                    }).catch((err)=>auth.handleError(err))
            }
        })


        this.post('#/login',(ctx)=>{
            let username = ctx.params['username-login'];
            let password = ctx.params['password-login'];


            if(password==='') {
                auth.showError('Password must not be empty!')
            }
            else if(typeof username!=="string"){
                auth.showError('Username must be string!')
            }
            else if(username.length<5){
                auth.showError('Username must be at least 5 characters!')
            }
            else{
                auth.login(username,password)
                    .then((userData)=>{
                        auth.showInfo('Login Successful');
                        auth.saveSession(userData);
                        ctx.redirect('#/home');
                    }).catch((err)=>auth.handleError(err))
            }
        });





        this.get('#/home',(ctx)=>{
            let receiptP = requester.get('appdata',`receipts?query={"_acl.creator":"${sessionStorage.getItem('userId')}","active":true}`,'kinvey');
            ctx.auth = auth.isAuth();
            let totalSum;
            ctx.username = sessionStorage.getItem('username');
            receiptP.then((receipt)=> {
                if(receipt.length!==0) {
                    totalSum = receipt[0].total
                }
            })

            async function loadData() {
                let receipt = await receiptP;
                if(receipt.length===0){
                    let data = {
                        "active": true,
                        "productCount": 0,
                        "total": 0
                    };

                    let receipt = await requester.post('appdata','receipts','kinvey',data);

                     ctx.receipt = receipt;

                     ctx.loadPartials({
                         header: './templates/common/header.hbs',
                         footer: './templates/common/footer.hbs',
                     }).then(function () {
                         ctx.partials = this.partials;
                         render();
                     })
                }
                else {
                    ctx.receipt = receipt[0];
                    let id = receipt[0]._id;
                    let entries = await requester.get('appdata',`entries?query={"receiptId":"${id}"}`,'kinvey');
                    entries.map((a)=>a.totPrice = Number(a.price)*Number(a.qty));
                    ctx.entry = entries;
                    await ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        entryPartial: './templates/entryPartial.hbs'
                    }).then(function () {
                        ctx.partials = this.partials;
                        render();
                    })

                }



            }
            loadData();

            function render() {
                ctx.partial('./templates/createReceipt.hbs')
                    .then(attachEvents)
            }

            function attachEvents() {
                $('input').on('input',(event)=>{
                    let qty =  $('input[name=qty]').toArray()[0].value;
                    let type = $('input[name=type]').toArray()[0].value;
                    let price = $('input[name=price]').toArray()[0].value;



                    if((!isNaN(qty))&&type!==''&&(!isNaN(price))&&price!==''&&qty!=='')
                    {
                        let arrCol =  $('.col').toArray();
                        let length = arrCol.length;

                        $('.col').toArray()[length-2].textContent =  totalSum+qty*price;
                        $('.col').toArray()[length-7].textContent=qty*price;
                    }
                    else{
                        let arrCol =  $('.col').toArray();
                        let length = arrCol.length;

                        $('.col').toArray()[length-2].textContent = totalSum;
                        $('.col').toArray()[length-7].textContent='Sub-total'
                    }




                })
            }


        })

        this.post('#/create/:id',(ctx)=>{
            let id = ctx.params.id;
            id = id.slice(1);
            let obj;

            let data = {
                "type": ctx.params.type,
                "qty": ctx.params.qty,
                "price": ctx.params.price,
                "receiptId": id
            };

            async function loadPrice() {
                let entries =  await requester.get('appdata',`entries?query={"receiptId":"${id}"}`,'kinvey');

                let productCount = 0;
                let total = 0;
                entries.forEach(entry=>{

                   total+=Number(entry.qty*entry.price);
                   productCount+=Number(entry.qty);
                });

                total+=Number(ctx.params.price*ctx.params.qty);
                productCount+=Number(ctx.params.qty);

                obj = {
                    total,
                    productCount,
                    active: true
                };
                 await requester.update('appdata',`receipts/${id}`,'kinvey',obj);

                requester.post('appdata','entries','kinvey',data)
                    .then(()=>{
                        auth.showInfo('Entry added successfully!');
                        ctx.redirect('#/home');
                    }).catch((err)=>console.log(err))
            }

            if(ctx.params.type===''){
                auth.showError('type must be non empty string')
            }
            else if(isNaN(ctx.params.price)){
                auth.showError('price must be a number')
            }
            else if(isNaN(ctx.params.qty)){
                auth.showError('quantity must be a number')
            }
            else{
                loadPrice();
            }



        })

        this.get('#/delete/:id',(ctx)=>{
            let id = ctx.params.id;
            id = id.slice(1);
            async function loadDelete() {
                await requester.remove('appdata',`entries/${id}`,'kinvey');

                let receipt = await requester.get('appdata',`receipts?query={"_acl.creator":"${sessionStorage.getItem('userId')}","active":true}`,'kinvey');
                let idR = receipt[0]._id;
                let entries =  await requester.get('appdata',`entries?query={"receiptId":"${idR}"}`,'kinvey');
                console.log(entries);
                let productCount = 0;
                let total = 0;
                entries.forEach(entry=>{
                    console.log(entry);
                    total+=Number(entry.qty*entry.price);
                    productCount+=Number(entry.qty);
                });


                obj = {
                    total,
                    productCount,
                    active: true
                };
                await requester.update('appdata',`receipts/${idR}`,'kinvey',obj);


                auth.showInfo('Entry deleted successfully!');
                ctx.redirect('#/home');

            }

            loadDelete()
                .then(()=>{
                   auth.showInfo('Item Deleted successfully!');
                }).catch((err)=>auth.handleError(err))
        })

        this.post('#/checkout/:id',(ctx)=>{
            let id = ctx.params.id;
            id = id.slice(1);

            async function loadDelete() {
                let receipt = await requester.get('appdata',`receipts?query={"_acl.creator":"${sessionStorage.getItem('userId')}","active":true}`,'kinvey');
                let idR = receipt[0]._id;
                let entries =  await requester.get('appdata',`entries?query={"receiptId":"${idR}"}`,'kinvey');
                if(entries.length===0){
                    auth.showError('There must be entries before checkout!')
                }
                else {
                    let productCount = 0;
                    let total = 0;
                    entries.forEach(entry => {
                        console.log(entry);
                        total += Number(entry.qty * entry.price);
                        productCount += Number(entry.qty);
                    });


                    obj = {
                        total,
                        productCount,
                        active: false
                    };
                    await requester.update('appdata', `receipts/${idR}`, 'kinvey', obj);


                    auth.showInfo('Entry checkedout successfully!');
                    ctx.redirect('#/home');
                }

            }

            loadDelete();
        });



        this.get('#/overview',(ctx)=>{
            ctx.auth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username')
            requester.get('appdata',`receipts?query={"_acl.creator":"${sessionStorage.getItem('userId')}","active":false}`,'kinvey')
                .then((receipt)=>{
                    ctx.receipt = receipt;

                    let allSum = 0;
                    receipt.forEach(entry=>{
                        allSum+=Number(entry.total)
                    })

                    ctx.allSum = allSum
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        receipt: './templates/receipt.hbs'
                    }).then(function () {
                        this.partial('./templates/allReceipts.hbs')
                    })
                })
        })

        this.get('#/details/:id',(ctx)=>{
            ctx.auth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username')
            let id = ctx.params.id;
            id = id.slice(1);




            async function loadPrice() {
                let entries =  await requester.get('appdata',`entries?query={"receiptId":"${id}"}`,'kinvey');
                entries.map((a)=>a.totPrice=a.qty*a.price)
                ctx.entry = entries;

            }

            loadPrice()
                .then(()=>{
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        entrD: './templates/entrD.hbs'
                    }).then(function () {
                        this.partial('./templates/details.hbs')
                    })
                }).catch((err)=>auth.handleError(err))



        })

    });



    app.run();
})