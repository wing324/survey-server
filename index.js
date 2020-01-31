// import express by using require, since node.js doesn't support import express
const express = require('express');
require('./services/passport');
const keys = require('./config/keys');
const MongoClient = require('mongodb').MongoClient;
const mongo = new MongoClient(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
// concise statement
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
