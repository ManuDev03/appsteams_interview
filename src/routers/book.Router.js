const express = require('express')
const router = express.Router()
const booksController = require('../controllers/book.Controller');


router.route('/books')
.post(booksController.postBook)
.get(booksController.getBooks);

router.route('/books/:bookId')
.get(booksController.getBookById)
.put(booksController.updateBookById)
.delete(booksController.deleteBookById);

module.exports = router

