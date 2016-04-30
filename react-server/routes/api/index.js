'use strict';

// Require todo controller as handler for json api
var TodoCtrl = require('../../controllers/TodoCtrl');

module.exports = function (app) {

  app.get('/api/todos.json', TodoCtrl.index);
  app.get('/api/todos/:id.json', TodoCtrl.show);
  app.post('/api/todos/:id.json', TodoCtrl.create);
  app.delete('/api/todos/:id.json', TodoCtrl.destory);

};