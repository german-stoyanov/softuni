const express = require('express');
const handlebars=require('express-handlebars');
const Handlebars = require('handlebars')

const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sesion = require('express-session');
const passport = require('passport')

module.exports = (app,config)=>{
    Handlebars.registerHelper('ifAdmin', function(name,block) {
        if (name === "admin") {
            return block.fn(this);
        } else {
            if(block){
            return block.inverse(this);
            }
        }
    });

    Handlebars.registerHelper('ifEq', function(name,name1,block) {
        if (name1 === name) {
            return block.fn(this);
        } else {
            if(block){
            return block.inverse(this);
            }
        }
    });

    app.engine('hbs',handlebars({
        extname:'.hbs',
        layoutsDir:'views/layouts',
        defaultLayout:'main'
    }))
    app.set('view engine','hbs');

    

    app.use(bodyParser.urlencoded({extended:true}))

    app.use(cookieParser());
    app.use(sesion({
        secret: '6b875ecdcb3d258f0e1155a3b75d9d79',
        saveUninitialized: false,
        resave: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req,res,next)=>{
        if(req.session.message){
            res.locals.message = req.session.message;

        }
        if(req.session.error){
            res.locals.error = req.session.message;
        }
        if(req.user){
            res.locals.user = req.user;
        }

        next();
    })

    app.use((req,res,next)=>{
        if(req.session.message){
            req.session.message = undefined;

        }
         next();
    })

    app.use((req,res,next)=>{
        if(req.url.startsWith('/static')){
            req.url = req.url.replace('/static','')
        }

        next()
    },express.static(path.normalize(path.join(config.rootPath,'static'))))
}