const port = 5000;
const router = require('./app');
const express = require("express");
const app = express();

app.use('/api/books', router);
console.log(app.routes);
app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});