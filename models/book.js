const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  authors: { type: String, required: true },
  description: { type: String },
  image: String,
  link: { type: String },
  bookID: { type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
