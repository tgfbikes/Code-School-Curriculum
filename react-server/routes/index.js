'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('this is working');
});

module.exports = router;
