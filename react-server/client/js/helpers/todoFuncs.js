'use strict';

var ajax = require('./ajax');

var todoFuncs = {
  
  index: function (self) {
    var that = self;                // Need to keep context of the Todo component in our success and error callbacks
    var url = '/api/todos.json';    // Path to get all todos from data base
    var data = {};
    var success = function(data) {  // Ok, data is an object with objects inside i.e. { {...}, {...}, ... }
      var updatedTodos = Object.assign([], that.state.todos); // We don't want to directly mess with todos on state

      for (var key in data) {                   // We iterate over the main object 'data' to get access to the other objects
        if (data.hasOwnProperty(key)) {         // Convention for making sure we don't pull any data from prototype
          var todoData = data[key];             // Grap the object at data[key] -- key will be the place the object is located
          var todo = {                          // Create a new todo object literal from each object in data object
            id: todoData._id,
            title: todoData.title,
            description: todoData.description,
            done: todoData.done
          };
          updatedTodos.push(todo);              // Each todo we create, we want to push to updatedTodos
        }
      }

      that.setState({  // Set state which will cause a re-render, and we have our data from the DB, I'm excited
        todos: updatedTodos
      });

    };
    var error = function (xhr, status, err) {
      console.log(err);
    };

    ajax(url, data, success, error, 'GET');    // Need to specify 'GET' since type default is 'POST'
  },
  
  show: function () {
    
  },
  
  create: function () {
    
  },
  
  update: function () {
    
  },
  
  delete: function () {
    
  }
  
};

module.exports = todoFuncs;