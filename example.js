// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();  

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
app.use(router);


app.listen(3000);
console.log("App is Running:  http://Localhost:3000");



/*  CABECERAS UTILES   */
/**
 *  cache-control => Controlar Cache 
 * user-agent => Navegador
 * accept => Contenido que podemos Aceptar. 
 * accept-encoding.
 * 
 */