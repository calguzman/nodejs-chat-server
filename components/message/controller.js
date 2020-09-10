const store = require('./store');

/* -------------------------------------------------------------------------- */
/*                                 add Message                                */
/* -------------------------------------------------------------------------- */

function addMessage(user,message) {
  // TODO  ADD MESSAGE
  return new Promise((resolve,reject)=>{
    if(!user || !message){
      console.error('[messageController] No hay Usuario o Mensaje');
      return reject('Composición de mensaje invalida');
      console.log("Aun corriendo If ");
      return false; 
    }
    const fullMessage = {
      user:user,
      message:message, 
      date: new Date(),
    }
    store.add(fullMessage);
    resolve(fullMessage);
  })
}
function getMessages() {
  return new Promise((resolve,reject)=>{
    resolve(store.list()); 
  });
} function updateMessage(id,message) {
  return new Promise( async (resolve,reject)=>{
    if(!id || !message){
      return reject('Composición Invalida');
      return false
    }
    const result = await store.update(id,message);
    resolve (result);
  });
}
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
}
