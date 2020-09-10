// Connection For DB 
const Model = require('./model');
const db = require('mongoose');
const uri = 'mongodb://telegrom_admin:Paraque2016@curso-platzi-shard-00-00.oatkl.mongodb.net:27017,curso-platzi-shard-00-01.oatkl.mongodb.net:27017,curso-platzi-shard-00-02.oatkl.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-y4sug6-shard-0&authSource=admin&retryWrites=true&w=majority';
db.Promise = global.Promise;  // Para que Mongoose use las promesas nativas de JavaScript.

const connect = async () =>{
  try {
      await db.connect(uri,{
      useNewUrlParser:true,
      useUnifiedTopology: true
    })
    console.log("Db is Connected");
  } catch (error) {
    console.error("ERROR DB: "+error);
  }
}
// Send Connect Command 
connect();

/* -------------------------------------------------------------------------- */
/*                              Methods for Model                             */
/* -------------------------------------------------------------------------- */

async function addMessage(message) {
  //  list.push(message);
  const myMessage = new Model(message);
  await myMessage.save();
  // TODO por resolver!
}
async function getMessages() {
  const messages = await Model.find();
  return messages;
}
async function updateMessage(id,message) {
 const foundMessage = await Model.findOne({
   _id:id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}
function deleteMessage(id) {
  // TODO DELETE MESSAGE
}
function getMessage(params) {
  // TODO GET MESSAGE
}
module.exports = {
  add: addMessage,
  list: getMessages,
  get:getMessage,
  update: updateMessage,
  delete:deleteMessage
}
