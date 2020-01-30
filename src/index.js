// import express by using require, since node.js doesn't support import express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({'hi': 'there'});
});

app.listen(5000);
