const Article = require('../models/Article');
const User = require('../models/User');
const Edit = require('../models/Edit');
const dateFormat = require('dateformat');

module.exports.GetCreate = (req,res)=>{
    res.render('products/create');
}

module.exports.History = (req,res)=>{
    let id = req.params.id;
    
    
    Article.findById(id).then((article)=>{
        let edits = article.editS;
        Edit.find({_id:{$in:edits}}).populate('author').then((edits)=>{
            edits.forEach(edit=>{
                edit.dateF = edit.creationDate.toLocaleString()
            })
            edits =edits.reverse();
            
            res.render('article/history',{edits,title:article.title})
        })
    })
}

module.exports.search = (req,res)=>{
    

    Article.find().populate('editS').then((articles)=>{
        articles = articles.filter((x)=>x.title.toLowerCase().includes(req.body.search));
        articles.forEach(article=>{
    
            let lastEdit = article.editS.pop();
         
            article.editID = lastEdit._id;
        })

        res.render('article/search',{search: req.body.search,articles:articles})
    })
}

module.exports.lock = (req,res)=>{
    let id = req.params.id;
    Article.findById(id).then((article)=>{
        article.locked = true;
        article.save().then(()=>{
            req.session.message = "uspesho locknat artical"
            res.redirect('/')
        })
        
    })
}

module.exports.unlock = (req,res)=>{
    let id = req.params.id;
    Article.findById(id).then((article)=>{
        article.locked = false;
        article.save().then(()=>{
            req.session.message = "uspesho unlocknat artical"
            res.redirect('/')
        })
    })
}

module.exports.getEdit=(req,res)=>{
    let id = req.params.id;

    Article.findById(id).populate('editS').then((article)=>{
        if(article.locked){
            req.session.error = "You can not edit this article unless you are admin."
            res.redirect('/')
        }
        else{
            article.content = article.editS.pop().content;
            
         
            res.render('article/edit',article)
            
       
        }
    })
}

module.exports.postEdit = (req,res)=>{
    let content = req.body.content;
    console.log(content);
    let id = req.params.id;

    let edit = {
        author: req.user._id,
        content: req.body.content,
    }
    Edit.create(edit).then(edit=>{
        Article.findById(id).then((article)=>{
            article.editS.push(edit);
            article.save().then((article)=>{
                edit.article = article._id;
                edit.save().then(()=>{
                    req.session.message = "article successfully edited"
                    res.redirect('/');
                })
                
            })
        })
        

    }) 
}

module.exports.Details = (req,res)=>{
    
    let id = req.params.id;
    Edit.findById(id).populate('article').then((edit)=>{
        res.render('article/details',edit)
    })
}

module.exports.articleCreate = (req,res)=>{
    res.render('article/create')
}

module.exports.getLast = (req,res)=>{

    
    Article.find().then(articles=>{
        if(articles.length===0){
            req.session.error = "no articles"
             res.redirect('/')
            
        }
       let id = articles.pop()._id;
       
       Article.findById(id).populate('editS').then((article)=>{
           let idE = article.editS.pop()._id
            res.redirect(`/articles/${idE}`)
       })
      
    })
}

module.exports.All = (req,res)=>{
    Article.find().populate('editS').then((articles)=>{
        articles = articles.sort((a,b)=>a.title.localeCompare(b.title))
        articles.forEach(article=>{
            let lastEdit = article.editS.pop();
         
            article.editID = lastEdit._id;
        })
        res.render('article/allA',{articles})
    })
}

module.exports.articleCreateP = (req,res)=>{
    let edit = {
        author: req.user._id,
        content: req.body.content,
    }
    Edit.create(edit).then(edit=>{
        let article = {
            title: req.body.title,
            editS: [edit._id]
        }
        Article.create(article).then(article=>{
            edit.article = article._id;
            edit.save().then(()=>{
                req.session.message= "article created"
                res.redirect('/')
            })
        })
    }) 
}




