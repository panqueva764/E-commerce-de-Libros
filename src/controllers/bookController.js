// src/controller/bookController.js
const bookService = require('../services/bookService');

const getBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addBook = async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const books = await bookService.createMultipleBooks(req.body);
      return res.status(201).json(books);
    }
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const lendBook = async (req, res) => {
  try {
    const book = await bookService.lendBook(req.params.id);
    res.status(200).json({ message: 'Libro prestado', book });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const book = await bookService.returnBook(req.params.id);
    res.status(200).json({ message: 'Libro devuelto', book });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAvailableBooks = async (req, res) => {
  try {
    const books = await bookService.getAvailableBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUnavailableBooks = async (req, res) => {
  try {
    const books = await bookService.getUnavailableBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getBooks, addBook, lendBook, returnBook, getAvailableBooks, getUnavailableBooks };
