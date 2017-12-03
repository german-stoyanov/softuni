const Article = require('./../models/Article');

module.exports = {
    createGet: (req, res) => {
        res.render('article/create')
    },
    createPost: (req, res) => {
        let articleArgs = req.body;
        let errorMs = '';
        if(!req.isAuthenticated()){
            errorMs = "You should be logged in to post articles";
        }
        else if(!articleArgs.content){
            errorMs = "Invalid content";
        }
        else if(!articleArgs.title){
            errorMs = "Invalid titile";
        }
        if(errorMs){
            res.render('article/create', {error: errorMs})
        }

        articleArgs.author = req.user.id;
        Article.create(articleArgs).then(article => {
            req.user.push(article.id);
            req.user.save(err => {
                if(err){
                    req.redirect('/', {error: err.message});
                }
                else{
                    req.render('article/create');
                }
            })

        })
    },
    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id).populate('author').then(article => {
            res.render('article/details', article)
        })
    }
};