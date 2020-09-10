const list = [];
// Mock for Message!

function addMessage(message) {
 list.push(message);
}
function getMessages() {
  return list;
}
function updateMessage(id,message) {
 // TODO UPDATE MESSAGE
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
