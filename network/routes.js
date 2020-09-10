const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');

const routes= function (app) {
  // Mounting de Router App!
  app.use('/message',message); // Mount the router on App por  Messages Component
  app.use('/user',user);      // Mount the router on App por  User Component
}
module.exports = routes;