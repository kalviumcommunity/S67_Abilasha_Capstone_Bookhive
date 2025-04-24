const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },

  // Added by: one-to-many (a user adds multiple books)
 addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
