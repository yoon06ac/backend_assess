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
  res.status(200).send(library.books);
});

router.post('/', jsonParser, (req,res) => {
  if (req.body == undefined) {
    res.status(400).send('body is undefined');
  }
  // Add new book
  var newBooks = req.body;
  var errMsg = '';
  if (!newBooks.author) {
    console.log('no author');
    errMsg +=  "'author' is a required field\n";
  }
  if (!newBooks.title) {
    console.log('no title');
    errMsg += "'title' is a required field\n";
  }
  if (!newBooks.yearPublished) {
    console.log('no author');
    errMsg += "'yearPublished' is a required field\n";
  }
  if (errMsg == '') {
    newBooks.id = id+1;
    library.books.push(newBooks);
    console.log('Response will be ',newBooks);
    res.status(201).send(newBooks);
  }
  else {
    console.log('err msg')
    res.status(400).send(errMsg);
  }
});

router.delete('/', (req,res) => {
  // Remove all books
  library = {books:[]}
  id = 0;
  res.status(204).send()
});


module.exports = router;
