'use strict';

var Todo = require('../models/Todo');

var TodoCtrl = {

  index: function (req, res) {
    res.render('index');
  }

  indexJson: function(req, res) {
    Todo.find({}, function(err, todos) {
      if (err) {
        console.log(err);
      } else {
        res.json(todos);
      }
    });
  }

};

module.exports = TodoCtrl;