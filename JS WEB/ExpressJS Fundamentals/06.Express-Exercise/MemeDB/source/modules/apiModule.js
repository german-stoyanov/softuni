const router = require('express').Router();

const memeService = require('../services/memeService');


const deleteMeme = (req, res) => {
    let memeId = req.params.id;
    memeService
        .delete(memeId)
        .then(() => {
            res.json({ location: '/memes/viewAllMemes' });
        })
        .catch(err => {
            console.log(err);
            res.json({ err: err });
        });

};

router
    .post('/memes/delete/:id', (req, res) => deleteMeme(req, res));

module.exports = router;