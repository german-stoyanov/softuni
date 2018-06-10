const mongoose = require('mongoose');

let catSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    color: {type: String},
})

let Cat = mongoose.model('Cat',catSchema)

let Owner = mongoose.model('Owner',{
    firstName: {type: String, required: true},
    lastName: {type: String,required:true},
    cats: [Cat.schema]
})

mongoose
    .connect('mongodb://localhost:27017/cats')
    .then(()=>{
        

        
            Cat.find({}).then(cats=>console.log(cats))
           
        
    })