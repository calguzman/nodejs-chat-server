const store = require('./store');


function addMessage(user,message) {
  // TODO  ADD MESSAGE
  return new Promise((resolve,reject)=>{
    if(!user || !reject){
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
}
module.exports = {
  addMessage,
  getMessages,
}
