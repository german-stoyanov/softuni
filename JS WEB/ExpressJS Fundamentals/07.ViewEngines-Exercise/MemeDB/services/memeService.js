const Meme = require('../models/memeModel');
const Genre = require('../models/genreModel');

const crud = require('../infrastructure/mongooseCrud');
const memes = crud(Meme);
const genres = crud(Genre);

module.exports = {
    create: meme => 
        new Promise((resolve, reject) => 
            genres
                .get(meme.genreId)
                .then(existingGenre => {
                    memes
                        .create(meme)
                        .then(meme => {
                            existingGenre.memes.push(meme._id);
                            existingGenre.save();
                            resolve(meme);
                        })
                        .catch(err => {
                            console.log(err);
                            reject(err);
                        });
                })
                .catch(err => reject(err))),
    createRange: memesArr => 
        new Promise((resolve, reject) => {
            var promises = memesArr
                .map(m => memes.create(m));
            Promise
                .all(promises)
                .then(memes => {
                    resolve(memes);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        }),
    get: id => 
        memes.get(id),
    getAll: () => 
        memes.getAll(),
    delete: id =>
        new Promise((resolve, reject) => {
            memes
                .delete(id)
                .then(meme => {
                    genres
                        .get(meme.genreId)
                        .then(genre => {
                            let memeIdIndex = genre.memes.indexOf(meme.id);
                    
                            genre.memes.splice(memeIdIndex, 1);
                            genre.save();
                            resolve();
                        });
                })
                .catch(err => {
                    console.log(err);
                    reject();
                });
        })
};