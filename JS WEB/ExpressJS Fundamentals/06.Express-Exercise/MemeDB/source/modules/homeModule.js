const router = require('express').Router();
const fs = require('fs');

const filePath = './source/views/home.html';

router
    .get('/', (req, res) => {
        fs.readFile(filePath, (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            res.end(data);
        });
    });

module.exports = router;

