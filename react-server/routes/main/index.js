'use strict';

var TodoCtrl = require('../../controllers/TodoCtrl');

module.exports = function(app) {
  
  app.get('/', function(req, res) {
    res.render('index');
  });

};
