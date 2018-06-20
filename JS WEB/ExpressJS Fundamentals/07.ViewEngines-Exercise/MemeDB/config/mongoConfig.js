const mongoose = require('mongoose');
const Admin = mongoose.mongo.Admin;

const memeService = require('../services/memeService');
const genreService = require('../services/genreService');

const initialData = require('../infrastructure/initialData');

const databaseName = 'memeDb';

mongoose.Promise = Promise;

module.exports = new Promise((resolve, reject) => {
    mongoose
        .connect(`mongodb://localhost:27017/${databaseName}`);
    mongoose.connection
        .on('open', () => {
            console.log(`Successfully connected to MongoDB, ${databaseName} database`);
            new Admin(mongoose.connection.db).listDatabases((err, result) => {
                let database = result.databases
                    .map(d => d.name)
                    .filter(n => n === databaseName)[0];
                if (!database) {
                    seed();
                }
                resolve();
            });
        })
        .on('error', err => {
            console.log(err);
            reject(err);
        });
});
    
function seed() {
    console.log('Seeding intial data...');
    genreService
        .create(initialData.genre)
        .then(genre => {
            memeService
                .createRange(initialData.memes)
                .then(memes => {
                    memes.forEach(m => {                        
                        genre.memes.push(m._id);
                        m.genreId = genre._id;
                        m.save();
                    });
                    genre.save(); 
                    console.log('Seed complete.');
                });
        })
        .catch(err => console.log(err));
}