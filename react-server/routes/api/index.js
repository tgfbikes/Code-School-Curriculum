'use strict';

var TodoCtrl = require('../../controllers/TodoCtrl');

module.exports = function (app) {
  app.get('/todos.json', TodoCtrl.index);
};