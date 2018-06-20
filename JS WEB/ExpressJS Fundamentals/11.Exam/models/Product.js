const mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    category: {type: mongoose.Schema.Types.String, required: true},
    size: {type: mongoose.Schema.Types.Number,min: [17, 'Too small'],max: [24,'Too big'], required: true},
    imageUrl: {type: mongoose.Schema.Types.String, required: true},
    toppings: [{type: mongoose.Schema.Types.String,required:false}],
});

let Product = mongoose.model("Product", productSchema);

module.exports = Product;