const mongoose = require("mongoose");

let orderSchema = mongoose.Schema({
    creator: {type: mongoose.Schema.Types.ObjectId,ref:'User', required: true},
    product: {type: mongoose.Schema.Types.ObjectId,ref:'Product', required: true},
    date: {type: mongoose.Schema.Types.Date, required: true,default: Date.now},
    toppings: [{type: mongoose.Schema.Types.String,required:false}],
    status: {type: mongoose.Schema.Types.String, default:'Pending'}
});

let Order = mongoose.model("Order", orderSchema);

module.exports = Order;