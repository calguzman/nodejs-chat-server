const store = require('./store');

/* -------------------------------------------------------------------------- */
/*                                 Add Message                                */
/* -------------------------------------------------------------------------- */

function addMessage(user,message) {
  // TODO  ADD MESSAGE
  return new Promise(async (resolve,reject)=>{
    if(!user){
      console.error('[messageController] No hay Usuario o Mensaje');
      return reject('Composición de mensaje invalida');
    }
    const fullMessage = {
      user:user,
      message:message, 
      date: new Date(),
    }
    try {
      await store.add(fullMessage);
      resolve(fullMessage);
    } catch (error) {
      return reject(error);
    }
    
  })
}
/* -------------------------------------------------------------------------- */
/*                                Get Messages                                */
/* -------------------------------------------------------------------------- */

function getMessages(filterUser) {
  return new Promise((resolve,reject)=>{
    resolve(store.list(filterUser)); 
  });
} 

/* -------------------------------------------------------------------------- */
/*                               Update Message                               */
/* -------------------------------------------------------------------------- */

function updateMessage(id,message) {
  return new Promise( async (resolve,reject)=>{
    if(!id || !message){
      return reject('Composición Invalida');
      return false
    }
    const result = await store.update(id,message);
    resolve (result);
  });
}

/* -------------------------------------------------------------------------- */
/*                               Delete Message                               */
/* -------------------------------------------------------------------------- */

function deleteMessage(id) {
  return new Promise( async (resolve,reject)=>{
    if(!id){
      return reject('Composición Invalida');
      return false
    }
    try {
      const result = await store.remove(id);
      resolve (result);
    } catch (error) {
      return reject(error);
    }
  });
}
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}