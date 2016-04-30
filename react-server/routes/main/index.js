'use strict';

// Require main controller as handler for / route
var MainCtrl = require('../../controllers/MainCtrl');

module.exports = function(app) {
  
  app.get('/', MainCtrl.index);

};
