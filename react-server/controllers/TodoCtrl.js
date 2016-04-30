'use strict';

var Todo = require('../models/Todo');

var TodoCtrl = {

  // Get all todos
  index: function (req, res) {
    Todo.find({}, function (err, todos) {
      if (err) {
        res.status(500).json({ // 500 tells user something went wrong on our end
          message: 'Data not found' // respond with json so front end can error handle
        });
      } else {
        res.json(todos);
      }
    });
  },
  
  // Show a todo
  show: function (req, res) {
    Todo.findOne({_id: req.params.id}, function (err, todo) {
      if (err) {
        res.status(500).json({
          message: 'Data not found'
        });
      } else {
        res.json(todo);
      }
    });
  },

  // Create a todo
  create: function (req, res) {
    console.log(req.body);
    var newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      done: false
    });
    newTodo.save(function (err) {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: 'Data not saved'
        });
      } else {
        res.json({
          message: 'Data saved'
        });
      }
    });
  },
  
  // Remove a todo
  destroy: function (req, res) {
    Todo.remove({_id: req.params.id}, function (err, todo) {
      if (err) {
        res.status(500).json({
          message: 'Data not found'
        });
      } else {
        res.json({
          message: 'Data removed'
        });
      }
    });
  }

};

module.exports = TodoCtrl;