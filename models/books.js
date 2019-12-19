const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: { type: String, required: false },
    // synopsis: String,
    thumbnail: { type: String },
    link: String,
    date: { type: Date, default: Date.now }
});

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;


