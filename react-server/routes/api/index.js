'use strict';

// Require todo controller as handler for json api
var TodoCtrl = require('../../controllers/TodoCtrl');

module.exports = function (app) {

  app.get('/todos.json', TodoCtrl.index);
  app.get('/todos/:id.json', TodoCtrl.show);
  app.post('/todos/:id.json', TodoCtrl.create);
  app.delete('/todos/:id.json', TodoCtrl.destory);

};