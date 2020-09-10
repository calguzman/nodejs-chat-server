// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();  
const response = require('../../network/response');
const controller = require('./controller');

// Path => /message/

// Get All Messages
router.get('/', async (req, res) => {
  try {
    let messageList = await controller.getMessages();
    response.success(req,res,messageList,200);
  } catch (error) {
    // TODO MANAGE ERROR FOR GET MESSAGES FROM CONTROLLER Y DB 
    response.error(req,res,'Unexpected Error',500);
    console.error(error);
  }
});

// Create Messages
router.post('/', async (req, res) => { 
  let user = req.body.user; 
  let message = req.body.message; 
  try  {
    const result = await controller.addMessage(user,message);
    response.success(req,res,result,201);
  }catch(error){
    // Se ha presentado un error creando el mensaje
    response.error(req,res,'Información Invalida:',400,error);
    console.error(`add Mesagge a devuleto un error => ${error}`);
  }
});

module.exports = router;