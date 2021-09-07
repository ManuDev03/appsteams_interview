const express = require('express')
const bookRouter = express.Router()
const booksController = require('../controllers/book.Controller');


bookRouter.route('/books')
.post(booksController.postBook)
.get(booksController.getBooks);

bookRouter.route('/books/:bookId')
.get(booksController.getBookById)
.put(booksController.updateBookById)
.delete(booksController.deleteBookById);

module.exports = bookRouter

