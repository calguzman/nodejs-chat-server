// Connection For DB 
const Model = require('./model');

/* -------------------------------------------------------------------------- */
/*                              Store Add Message                             */
/* -------------------------------------------------------------------------- */

function addMessage(message) {  
  const myMessage = new Model(message);
  return myMessage.save();
}

/* -------------------------------------------------------------------------- */
/*                             Store get Messages                             */
/* -------------------------------------------------------------------------- */

async function getMessages(filterUser) {
  let filter = {};
  if(filterUser!==null){
    filter = {
      user:filterUser
    };
    const messages = await Model.find(filter);
    return messages;

  }
  else{
    const messages = await Model.find();
    return messages;
  }
  
  
}

/* -------------------------------------------------------------------------- */
/*                            Store Update Messages                           */
/* -------------------------------------------------------------------------- */

async function updateMessage(id,message) {
 const foundMessage = await Model.findOne({
   _id:id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

/* -------------------------------------------------------------------------- */
/*                            Store Delete Messages                           */
/* -------------------------------------------------------------------------- */

function removeMessage(id) {
   return Model.deleteOne(
    {
      _id:id
    });
}

/* -------------------------------------------------------------------------- */
/*                              Store getMessages                             */
/* -------------------------------------------------------------------------- */

function getMessage(params) {
  // TODO GET MESSAGE
}
module.exports = {
  add: addMessage,
  list: getMessages,
  get:getMessage,
  update: updateMessage,
  remove:removeMessage
}
