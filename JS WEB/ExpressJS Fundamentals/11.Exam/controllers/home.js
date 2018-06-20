const Product = require('../models/Product');

module.exports.index = (req, res) => {
    Product.find().then((products)=>{
        let productB = products.filter(x=>x.category==="beef");
        let productC = products.filter(x=>x.category==="chicken");
        let productL = products.filter(x=>x.category==="lamb");
        res.render('home',{productB,productC,productL});
    })
   
    
}