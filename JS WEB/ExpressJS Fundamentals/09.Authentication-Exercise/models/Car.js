const mongoose = require("mongoose");

let carSchema = mongoose.Schema({
    make: {type: mongoose.Schema.Types.String, required: true},
    model: {type: mongoose.Schema.Types.String, required: true},
    imageUrl: {type: mongoose.Schema.Types.String, required: true},
    color: {type: mongoose.Schema.Types.String,required:false},
    rented: {type: mongoose.Schema.Types.Boolean,default:false},
    timesRented: {type: mongoose.Schema.Types.Number, default:0}
});

let Car = mongoose.model("Car", carSchema);

module.exports = Car;