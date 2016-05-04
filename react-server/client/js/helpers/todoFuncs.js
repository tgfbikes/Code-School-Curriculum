'use strict';

var ajax = require('./ajax');

var todoFuncs = {
  
  index: function (that) {
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
  
  show: function (that) {
    
  },
  
  create: function (that) {
    var newTodos = Object.assign([], that.state.todos);
    var resetInputs = Object.assign({}, that.state.inputs);
    var url = '/api/todos.json';
    var data = {
      title: that.state.inputs.title.value,
      description: that.state.inputs.description.value,
      done: false
    };

    resetInputs.title.value = '';
    resetInputs.description.value = '';

    var success = function (data) {
      console.log('created todo');
      var newTodo = {
        id: data._id,
        title: data.title,
        description: data.description,
        done: data.done
      };
      newTodos.push(newTodo);
      that.setState({
        todos: newTodos,
        inputs: resetInputs
      });
    };
    var error = function (xhr, status, err) {
      console.log('create failed');
      console.log(err);
    };

    ajax(url, data, success, error);
  },
  
  update: function (self) {
    
  },
  
  delete: function (self) {
    
  }
  
};

module.exports = todoFuncs;