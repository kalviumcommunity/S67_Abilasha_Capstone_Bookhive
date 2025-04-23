// src/routes/bookRoutes.js
const express = require('express');
const Book = require('../Model/Book');
const router = express.Router();

// 1. Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find(); 
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books", error: err.message });
  }
});

// 2. Get a book by ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Find book by ID
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Error fetching book", error: err.message });
  }
});

// Add new book
router.post('/books', async (req, res) => {
    try {
      const { title, author, genre, description, publishedDate } = req.body;
  
      const newBook = new Book({
        title,
        author,
        genre,
        description,
        publishedDate
      });
  
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: "Error adding book", error: err.message });
    }
  });
  

module.exports = router;
