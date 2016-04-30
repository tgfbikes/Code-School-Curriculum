'use strict';

var Todo = require('../models/Todo');

var TodoCtrl = {

  // Get all todos
  index: function (req, res) {
    Todo.find({}, function (err, todos) {
      if (err) {
        res.statusCode(500).json({ // 500 tells user something went wrong on our end
          message: 'Data not found' // respond with json so front end can error handle
        });
      } else {
        res.json(todos);
      }
    });
  },
  
  show: function (req, res) {
    res.json({
      message: 'show'
    });
  },
  
  create: function (req, res) {
    res.json({
      message: 'create'
    });
  },
  
  destroy: function (req, res) {
    res.json({
      message: 'destroy'
    });
  }

};

module.exports = TodoCtrl;