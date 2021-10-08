const express = require("express");
const router = express.Router();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
let library = {books:[]}
let id = 0
router.get('/', (req, res, ) => {
  // Returns a list of books in the library
  res.status(200).json(this.library.books);
});

router.post('/', (req,res) => {
  // Add new book
  var newBooks = req.body.books;
  var errMsg = '';
  if (!newBooks.author) {
    errMsg +=  "'author' is a required field\n";
  }
  if (!newBooks.title) {
    errMsg += "'title' is a required field\n";
  }
  if (!newBooks.yearPublished) {
    errMsg += "'yearPublished' is a required field\n";
  }
  if (errMsg != '') {
    newBooks.id += id;
    this.library.books.push(newBooks);
    res.status(201).send()
  }
  else {
    res.status(400).send(errMsg);
  }
});

router.delete('/', (req,res) => {
  // Remove all books
  this.library = {books:[]}
  res.status(204).send()
});


module.exports = router;
