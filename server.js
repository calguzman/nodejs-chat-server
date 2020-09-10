
const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path:`.env.${NODE_ENV}`
}); 

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const uri = `mongodb://${process.env.user}:${process.env.password}@curso-platzi-shard-00-00.oatkl.mongodb.net:27017,curso-platzi-shard-00-01.oatkl.mongodb.net:27017,curso-platzi-shard-00-02.oatkl.mongodb.net:27017/${process.env.collection}?ssl=true&replicaSet=atlas-y4sug6-shard-0&authSource=admin&retryWrites=true&w=majority`;
const db = require('./db');

db(uri); // Connect To DataBase


const app = express();
app.use(bodyParser.json()); // Setting Body Parser! 
router(app);

// Serve Static Files
app.use('/app',express.static('public'));

app.listen(3000);
console.log("App is Running:  http://Localhost:3000");