const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const path = require('path');

const multer = require('multer')

let upload = multer({dest:'./public/images'})


const router = require('express').Router();
const shortid = require('shortid');

const memeService = require('../services/memeService');
const genreService = require('../services/genreService');
const memeTemplates = require('../infrastructure/memeTemplates');
const uiTemplates = require('../infrastructure/uiTemplates');
const placeholder = '<div id="replaceMe">{{replaceMe}}</div>';

let memeGenerator = (title, memeSrc, description, privacy, genreId) => {
    return {
        title: title,
        memeSrc: memeSrc,
        description: description,
        privacy: privacy,
        dateStamp: Date.now(),
        genreId: genreId
    };
};

let defaultResponse = (respString, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(respString);
};

let fieldChecker = obj => {
    for (let prop in obj) {
        if (obj[prop] === '') {
            return true;
        }
    }
};

let viewAll = (req, res) => {
    memeService
        .getAll()
        .then(data => {
            let memes = data
                .sort((a, b) => b.dateStamp - a.dateStamp)
                .filter(meme => meme.privacy === 'on');

                res.render('viewAll',{memes})

          
           
        });
};

let viewAddMeme = (req, res, status = null) => {
        genreService
            .getAll()
            .then(genres => {
                res.render('addMeme',{genres})

        });
    
};

let getDetails = (req, res) => {
    let targetId = req.params.id;
    memeService
        .get(targetId)
        .then(targetedMeme => {
           
        
           
                res.render('details',targetedMeme);
        
             
            
        })
        
};

let addMeme = (req, res) => {
    let productObj = req.body;
    let meme = {
        title: productObj.memeTitle,
        description: productObj.memeDescription,
        privacy: productObj.status,
        genreId: productObj.genreSelect
    }
   
    meme.memeSrc = `/public/images/${req.file.filename}`;
    console.log(meme);

    memeService.create(meme).then((product) => {
        res.redirect('/')
    })

         
};

let createGenreView = (req, res) => {
    res.render('addGenre');
};

let postGenre = (req, res)=>{
    console.log(req.body)
    let genre = {
        title: req.body.title,
        memes: []
    }
    
    genreService.create(genre).then(()=>{
        res.redirect('/')
    })



}

router
    .get('/viewAllMemes', (req, res) => viewAll(req, res))
    .get('/addMeme', (req, res) => viewAddMeme(req, res))
    .post('/addMeme',upload.single('meme') ,(req, res) => addMeme(req, res))
    .get('/getDetails/:id', (req, res) => getDetails(req, res))
    .get('/addGenre', (req, res) => createGenreView(req, res))
    .post('/addGenre', (req, res)=>postGenre(req, res))

module.exports = router;
