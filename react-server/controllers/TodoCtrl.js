'use strict';

var Todo = require('../models/Todo');

var TodoCtrl = {

  index: function (req, res) {
    res.json({
      message: 'this is working'
    });
    // Todo.find({}, function (err, todos) {
    //   if (err) {
    //     res.statusCode(500).json({
    //       message: 'Data not found'
    //     });
    //   } else {
    //     res.json(todos);
    //   }
    // });
  }

};

module.exports = TodoCtrl;