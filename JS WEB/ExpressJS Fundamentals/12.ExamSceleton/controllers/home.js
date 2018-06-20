const Article = require('../models/Article');

module.exports.index = (req, res) => {
    Article.find({}).populate('editS').then(articles => {
        let latest
        if(articles.length>=1){
         latest = articles[articles.length-1];
        let lastEdit = articles[articles.length-1].editS.pop();
        latest.content = lastEdit.content.split(' ').slice(0,51).join(' ');
        latest.editID = lastEdit._id;
        }

        
        articles.pop();

        let lastThree = articles.slice(Math.max(articles.length - 3, 0))
        lastThree.forEach(article=>{
    
            let lastEdit = article.editS.pop();
         
            article.editID = lastEdit._id;
        })
        lastThree = lastThree.reverse()
        
        console.log(lastThree)

        res.render('home',{latest,lastThree:lastThree})
    })
    
   
}