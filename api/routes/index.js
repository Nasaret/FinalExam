var express = require('express');
var router = express.Router();
var ctrlMessages = require('../controllers/messages.controllers.js');

router
  .route('/messages')
  .get(ctrlMessages.getAll);

module.exports = router;
