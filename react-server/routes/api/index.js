'use strict';

// Require todo controller as handler for json api
var TodoCtrl = require('../../controllers/TodoCtrl');

module.exports = function (app) {

  app.get('/api/todos.json', TodoCtrl.index);
  app.get('/api/todos/:id.json', TodoCtrl.show);
  app.post('/api/todos.json', TodoCtrl.create);
  app.delete('/api/todos/:id.json', TodoCtrl.destroy); // Destroy has to go in above create due to both being POST

};