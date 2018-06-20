const Car = require('../models/Car');
const User = require('../models/User');
const fs = require('fs')

module.exports.getAllCars = (req,res)=>{
    Car.find({rented:false}).then(cars=>{
        res.render('cars/all',{cars})
    })
}

module.exports.AddCarGet = (req,res)=>{
    res.render('cars/create')
}

module.exports.GetEdit = (req,res)=>{
    let id = req.params.id;
    console.log(id);

    Car.findById(id).then((car)=>{
        res.render('cars/edit',car)
    })
}

module.exports.postRent = (req,res)=>{
    let id = req.params.id;
    let user = req.user;
    Car.findById(id).then(car=>{
        car.rented = true;
        car.timesRented = Number(car.timesRented)+1;

        car.save().then((car)=>{
            user.rentedCars.push(car._id);
            let index = user.rentedCarsHistory.indexOf(car._id);
            if(index>=0){
                 user.rentedCarsHistory.splice(index,1);
            }
            user.save().then(()=>{
                req.session.message = "bate nae kolata"
                res.redirect('/cars/all')
            })
        })
       
        
    })
}

module.exports.getRidOf = (req,res)=>{
    let carId = req.params.id;
    let user = req.user;

    Car.findById(carId).then(car=>{
        car.rented = false;
        user.rentedCarsHistory.push(car._id);
        let index = user.rentedCars.indexOf(car._id);
        if(index>=0){
            user.rentedCars.splice(index,1);
        }
        console.log(user.rentedCars)
        car.save().then(()=>{
            user.save().then(()=>{
                req.session.message = "bate oturva se ot kolata"
                res.redirect('/cars/all')
            })
        })
    })
}

module.exports.getMe = (req,res)=>{
    let id = req.user._id;

    User.findById(id).populate('rentedCars').populate('rentedCarsHistory').then((user)=>{
        res.render('user/profile',user);
    })
}

module.exports.getRent = (req,res)=>{
    let id = req.params.id;
    let user = req.user;
    Car.findById(id).then(car=>{
        res.render('cars/rent',car)
        
    })
}

module.exports.PostEdit = (req,res)=>{
    let id = req.params.id;

    Car.findById(id).then((car)=>{
        if(req.file){
            
            fs.unlinkSync('.'+car.imageUrl)
            car.imageUrl = `/public/images/${req.file.filename}`;
        }
        car.make = req.body.make;
        car.model = req.body.model;
        car.color = req.body.color;
        car.save().then(()=>{
            req.session.message = "bate redactira kolata"
            res.redirect('/cars/all')
        })
    })
}

module.exports.AddCarPost = (req,res)=>{
    let car = req.body;
    car.imageUrl = `/public/images/${req.file.filename}`;
    Car.create(car).then(()=>{
        req.session.message = "bate postna kola"
        res.redirect('/');
    })
}