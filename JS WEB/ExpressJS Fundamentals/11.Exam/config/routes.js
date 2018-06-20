const handlers = require('../controllers')
const auth = require('../config/auth');


module.exports = (app)=>{
    app.get('/',handlers.home.index);

    app.get('/products/create',auth.isInRole('Admin'),handlers.products.GetCreate);
    app.post('/products/create',auth.isInRole('Admin'),handlers.products.PostCreate);

    app.get('/products/order/:id',auth.isAuthenticated,handlers.products.getOrder);
    app.post('/products/order/:id',auth.isAuthenticated,handlers.products.PostOrder);

    app.get('/MyOrders',auth.isAuthenticated,handlers.products.MyOrders);

    app.get('/order/details/:OrderId',auth.isAuthenticated,handlers.products.OrdersDetails);

    app.get('/orders/allOrders',auth.isInRole('Admin'),handlers.products.AllOrders);

    app.post('/order/changeS',auth.isInRole('Admin'),handlers.products.CS)
    
    app.get('/user/register',handlers.user.registerGet);
    app.post('/user/register',handlers.user.registerPost)

    app.get('/user/login',handlers.user.loginGet);
    app.post('/user/login',handlers.user.loginPost);

    app.get('/user/logout',handlers.user.logout);
}