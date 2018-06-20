const handlers = require('../controllers')
const auth = require('../config/auth');

const multer = require('multer')


let upload = multer({dest:'./public/images'})

module.exports = (app)=>{
    app.get('/',handlers.home.index);

    app.get('/cars/create',auth.isInRole('Admin'),handlers.cars.AddCarGet);
    app.post('/cars/create',auth.isInRole('Admin'),upload.single('imageUrl'),handlers.cars.AddCarPost);
   

    app.get('/cars/all',handlers.cars.getAllCars);

    app.get('/cars/edit/:id',auth.isInRole('Admin'),handlers.cars.GetEdit);
    app.post('/cars/edit/:id',auth.isInRole('Admin'),upload.single('imageUrl'),handlers.cars.PostEdit);

    app.get('/cars/rent/:id',auth.isAuthenticated,handlers.cars.getRent);
    app.post('/cars/rent/:id',auth.isAuthenticated,handlers.cars.postRent);

    app.get('/users/profile/me',auth.isAuthenticated,handlers.cars.getMe);

    app.get('/cars/getRidOf/:id',auth.isAuthenticated,handlers.cars.getRidOf)

    app.get('/user/register',handlers.user.registerGet);
    app.post('/user/register',handlers.user.registerPost)

    app.get('/user/login',handlers.user.loginGet);
    app.post('/user/login',handlers.user.loginPost);

    app.get('/user/logout',handlers.user.logout);
}