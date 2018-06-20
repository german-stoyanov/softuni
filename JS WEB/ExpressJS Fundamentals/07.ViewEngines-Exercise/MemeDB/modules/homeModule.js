const router = require('express').Router();

router
    .get('/', (req, res) => {
        res.render('home.hbs')
    });

module.exports = router;

