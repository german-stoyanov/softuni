const mongoose=require('mongoose');
mongoose.Promise = global.Promise;


module.exports=(settings)=>{
    mongoose.connect(settings.db);

    let database = mongoose.connection;

    database.once("open", (err) => {
        if (err) {
            console.log(err);
            return;            
        }
        console.log("Connected!");        
    });

    database.on("error", (err) => {
        console.log(err);        
    })
}