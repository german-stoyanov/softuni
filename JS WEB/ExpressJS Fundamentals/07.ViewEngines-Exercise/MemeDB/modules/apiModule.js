const router = require('express').Router();

const memeService = require('../services/memeService');


const deleteMeme = (req, res) => {
    let memeId = req.params.id;
    memeService.delete(memeId).then(()=>{
        res.redirect('/')
    })

};

router
    .get('/delete/:id', (req, res) => deleteMeme(req, res));

module.exports = router;