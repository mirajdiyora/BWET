const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// ---------------- CREATE BOOK ----------------
router.post('/', async (req, res) => {
  try {
    const {
      bookId,
      bookName,
      bookAuthor,
      bookPublishYear,
      bookQuantity
    } = req.body;

    if (!bookId || !bookName || !bookQuantity) {
      return res.status(400).json({
        message: "BookId, BookName and BookQuantity are mandatory"
      });
    }

    const bookExists = await Book.findOne({ bookId });
    if (bookExists) {
      return res.status(400).json({ message: "Book already exists" });
    }

    const newBook = new Book({
      bookId,
      bookName,
      bookAuthor,
      bookPublishYear,
      bookQuantity
    });

    const savedBook = await newBook.save();
    res.status(201).json({
      message: "Book added successfully",
      data: savedBook
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ---------------- GET ALL BOOKS ----------------
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- GET BOOK BY ID ----------------
router.get('/:bookId', async (req, res) => {
  try {
    const book = await Book.findOne({ bookId: req.params.bookId });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- UPDATE BOOK ----------------
router.patch('/:bookId', async (req, res) => {
  try {
    const updates = req.body;

    const updatedBook = await Book.findOneAndUpdate(
      { bookId: req.params.bookId },
      { $set: updates },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book updated successfully",
      data: updatedBook
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ---------------- DELETE BOOK ----------------
router.delete('/:bookId', async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({
      bookId: req.params.bookId
    });

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
