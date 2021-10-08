const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
let library = {books:[]}
let id = 0

var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded();

router.get('/', (req, res, ) => {
  // Returns a list of books in the library
  res.status(200).json(library.books);
});

router.post('/', jsonParser, (req,res) => {
  console.log('requests body: ', req.body)
  if (req.body == undefined) {
    res.status(400).send('body is undefined');
  }
  // Add new book
  var newBooks = req.body;
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
    library.books.push(newBooks);
    res.status(201).send()
  }
  else {
    res.status(400).send(errMsg);
  }
});

router.delete('/', (req,res) => {
  // Remove all books
  library = {books:[]}
  res.status(204).send()
});


module.exports = router;
