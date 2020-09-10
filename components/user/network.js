const express = require('express');
const router = express.Router();  
const response = require('../../network/response');

// Path => /user/

router.get('/', (req, res) => {
  response.success(req,res,'Get Request for an User ');
});
router.post('/', (req, res) => {
  response.success(req,res,'POST Request for an User');
});

module.exports = router;