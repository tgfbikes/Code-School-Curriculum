'use strict';

var MainCtrl = {

  index: function (req, res) {
    res.render('index'); // Remember, we are able to just say 'index' because Express already
  }                      // knows we are using jade since we set that up in server.js.
                         // Furthermore, we don't have to put the path to index.jade because
};                       // we set up our static files.

module.exports = MainCtrl;