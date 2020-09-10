// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

const app = express();
app.use(bodyParser.json()); // Setting Body Parser! 
router(app);

// Serve Static Files
app.use('/app',express.static('public'));

app.listen(3000);
console.log("App is Running:  http://Localhost:3000");