const mongoose = require("mongoose");

let articleSchema = mongoose.Schema({
    title: {type: mongoose.Schema.Types.String, required: true},
    locked: {type: mongoose.Schema.Types.Boolean,default: false},
    editS: [{type: mongoose.Schema.Types.ObjectId, ref: 'Edit',default:[]}],
});

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;