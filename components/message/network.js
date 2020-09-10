// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();  
const response = require('../../network/response');
const controller = require('./controller');

// Path => /message/

/* -------------------------------------------------------------------------- */
/*                                List Messages                               */
/* -------------------------------------------------------------------------- */

router.get('/', async (req, res) => {
  try {
    const filterUser = req.query.user || null; 
    let messageList = await controller.getMessages(filterUser);
    response.success(req,res,messageList,200);
  } catch (error) {
    // TODO MANAGE ERROR FOR GET MESSAGES FROM CONTROLLER Y DB 
    response.error(req,res,'Unexpected Error',500);
    console.error(error);
  }
});

/* -------------------------------------------------------------------------- */
/*                               Create Message                              */
/* -------------------------------------------------------------------------- */

router.post('/', async (req, res) => { 
  let user = req.body.user; 
  let message = req.body.message; 
  try  {
    const result = await controller.addMessage(user,message);
    response.success(req,res,result,201);
  }catch(error){
    // Se ha presentado un error creando el mensaje
    response.error(req,res,'Petición Invalida:',400,error);
    console.error(`add Mesagge a devuelto un error => ${error}`);
  }
});

/* -------------------------------------------------------------------------- */
/*                               Modify Message                               */
/* -------------------------------------------------------------------------- */

router.patch('/:id', async (req, res) => { 
  let id = req.params.id;
  let message = req.body.message;
  try  {
    const result = await controller.updateMessage(id,message);
    response.success(req,res,result,200);
  }catch(error){
    // Se ha presentado un error creando el mensaje
    response.error(req,res,'Información Invalida:',400,error);
    console.error(`Update Message: A devuelto un error => ${error}`);
  }
});

/* -------------------------------------------------------------------------- */
/*                               Delete Message                               */
/* -------------------------------------------------------------------------- */

router.delete('/:id', async (req, res) => { 
  let id = req.params.id;
  try  {
    const result = await controller.deleteMessage(id);
    response.success(req,res,`Mensaje con id ${id} Eliminado`,200);
  }catch(error){
    // Se ha presentado un error Eliminando el mensaje
    response.error(req,res,'Información Invalida:',500,error);
    console.error(`Delete Message: A devuelto un error => ${error}`);
  }
});

module.exports = router;