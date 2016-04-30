'use strict';

// Require todo controller as handler for json api
var TodoCtrl = require('../../controllers/TodoCtrl');

module.exports = function (app) {
  app.get('/todos.json', TodoCtrl.index);
};