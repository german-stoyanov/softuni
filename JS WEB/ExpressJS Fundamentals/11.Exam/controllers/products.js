const Product = require('../models/Product');
const User = require('../models/User');
const Order = require('../models/Order');
const dateFormat = require('dateformat');

module.exports.GetCreate = (req,res)=>{
    res.render('products/create');
}

module.exports.PostCreate = (req,res)=>{
    console.log(req.body)
    let product = req.body;
    product.size = Number(req.body.size);
    product.toppings = req.body.toppings.split(',').filter(x=>x!=='');

    Product.create(product).then((product)=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports.getOrder = (req,res)=>{
    let id = req.params.id;
    Product.findById(id).then(product=>{
        let toppings = product.toppings.map(x=>x={name: x})
        console.log(toppings)
        res.render('products/order',{toppings,product})
    })
}

module.exports.PostOrder = (req,res)=>{

    console.log(req.body)
    let keys = Object.keys(req.body).filter(x=>x.startsWith('topping'))
    let toppings = [];
    keys.forEach(key=>{
        toppings.push(req.body[key])
    })
    let obj = {};
    console.log(req.user)
    obj.creator = req.user._id;
    obj.product = req.body.product_id;
    obj.toppings = toppings;
    Order.create(obj).then((obj)=>{
        
            res.redirect('/order/details/'+obj._id)
        
       
    })
}

module.exports.OrdersDetails = (req,res)=>{
    Order.findById(req.params.OrderId).populate('product').then(obj=>{
        obj.dateF =  obj.date.toLocaleString()
        res.render('products/detailsO',obj)
    })
}

module.exports.CS = (req,res)=>{
    let arr = []
    Order.find().then(orders=>{
       
        orders.forEach(order=>{
            order.status = req.body[order._id]
            console.log(order)
            arr.push(order.save())
        })
        Promise.all(arr).then(()=>{
            console.log('lol')
            res.redirect('/')
        })
    })
    
}

module.exports.AllOrders = (req,res)=>{
    Order.find().populate('product').then((orders)=>{
        orders.forEach(order=>{
            order.dateF = order.date.toLocaleString()
        })
        res.render('products/allO',{orders})
    })
}

module.exports.MyOrders = (req,res)=>{
    Order.find().populate('product').then((orders)=>{
        
        console.log(req.user._id.toString())
        orders.forEach(order=>{
           
            order.dateF = order.date.toLocaleString()
        })
        
        orders = orders.filter(x=>x.creator.toString()===req.user._id.toString());
        
        res.render('products/MyOrders',{orders})
    })
}

