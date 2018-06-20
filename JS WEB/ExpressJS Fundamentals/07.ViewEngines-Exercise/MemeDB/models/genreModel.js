const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var genreSchema = Schema({
    title: Schema.Types.String,
    memes: [{ type: Schema.Types.ObjectId, ref: 'Meme' }]
});

var Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;