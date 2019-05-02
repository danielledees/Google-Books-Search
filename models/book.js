const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: {type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String },
  //image: String,
  link: {type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
