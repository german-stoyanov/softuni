const handlers = require('../controllers')
const auth = require('../config/auth');




module.exports = (app)=>{
    app.get('/',handlers.home.index);

    app.get('/articles/all',handlers.articles.All)

    app.get('/articles/:id',handlers.articles.Details)

    app.get('/article/history/:id',auth.isAuthenticated,handlers.articles.History)

    app.get('/article/edit/:id',auth.isAuthenticated,handlers.articles.getEdit)
    app.post('/article/edit/:id',auth.isAuthenticated,handlers.articles.postEdit)

    app.get('/articlesL/last',handlers.articles.getLast);

    app.get('/article/:id/unlock',handlers.articles.unlock);
    app.get('/article/:id/lock',handlers.articles.lock);

    app.post('/search',handlers.articles.search)


    app.get('/article/create',auth.isAuthenticated,handlers.articles.articleCreate)
    app.post('/article/create',auth.isAuthenticated,handlers.articles.articleCreateP)
    
    app.get('/user/register',handlers.user.registerGet);
    app.post('/user/register',handlers.user.registerPost)

    app.get('/user/login',handlers.user.loginGet);
    app.post('/user/login',handlers.user.loginPost);

    app.get('/user/logout',handlers.user.logout);
}