'use strict';

module.exports = function (app) {
  require('./api/index')(app);
  require('./main/index')(app);
};
