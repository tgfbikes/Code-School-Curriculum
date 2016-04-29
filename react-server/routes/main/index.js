'use strict';

var MainCtrl = require('../../controllers/MainCtrl');

module.exports = function(app) {
  
  app.get('/', MainCtrl.index);

};
