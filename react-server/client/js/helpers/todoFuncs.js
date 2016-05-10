'use strict';

var ajax = require('./ajax');
var Todo = require('../helpers/TodoModel');

var todoFuncs = {
  
  index: function (that) {
    // Path to get all todos from data base
    var url = '/api/todos.json';    
    var data = {};
    // Ok, data is an object with objects inside i.e. { {...}, {...}, ... }
    var success = function(data) {  
      // We don't want to directly mess with todos on state
      var updatedTodos = Object.assign([], that.state.todos); 
      var updatedCompletedTodos = Object.assign([], that.state.completedTodos);
      
      // We iterate over the main object 'data' to get access to the other objects
      for (var key in data) {                                                                      
        // Convention for making sure we don't pull any data from prototype
        if (data.hasOwnProperty(key)) {                                                            
          // Grap the object at data[key] -- key will be the place the object is located
          var todoData = data[key];                                                                
          // Create a new todo from each object in data object from the TodoModel
          var todo = new Todo(todoData._id, todoData.title, todoData.description, todoData.done);  
          // Each todo we create, we want to push to updatedTodos or updatedCompletedTodos
          if (todo.done) {  
            updatedCompletedTodos.push(todo);
          } else {
            updatedTodos.push(todo);              
          }
        }
      }

      that.setState({  // Set state which will cause a re-render, and we have our data from the DB, I'm excited
        todos: updatedTodos,
        completedTodos: updatedCompletedTodos
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
      var newTodo = new Todo(data._id, data.title, data.description, data.done);
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
  
  update: function (that, id, done) {
    var updatedTodos = Object.assign([], that.state.todos);
    var updatedCompletedTodos = Object.assign([], that.state.completedTodos);
    var url = '/api/todos/' + id + '.json';
    var todoData = {};

    if (done) {
      // Get from completedTodos
      updatedCompletedTodos.forEach(function (todo) {
        if (todo.id === id) {
          Object.assign(todoData, todo);
          todoData.done = false;
        } 
      });
    } else {
      // Get from todos
      updatedTodos.forEach(function (todo) {
        if (todo.id === id) {
          Object.assign(todoData, todo);
          todoData.done = true;
        } 
      });
    }

    var success = function (data) {
      if (data.done) {
        updatedTodos.forEach(function (todo, index) {
          if (todo.id === id) {
            updatedTodos.splice(index, 1);
          }
        });
        var updatedCompletedTodo = new Todo(data._id, data.title, data.description, data.done);
        updatedCompletedTodos.push(updatedCompletedTodo);
      } else {
        updatedCompletedTodos.forEach(function (todo, index) {
          if (todo.id === id) {
            updatedCompletedTodos.splice(index, 1);
          }
        });
        
        var updatedTodo = new Todo(data._id, data.title, data.description, data.done);
        updatedTodos.push(updatedTodo);
      }
    
      that.setState({
        todos: updatedTodos,
        completedTodos: updatedCompletedTodos
      });
    };
    
    var error = function (xhr, status, err) {
      console.log('updated todo failed');
      console.log(err);
    };
    
    ajax(url, todoData, success, error, 'PUT');
  },
  
  delete: function (that, id) {
    var currentTodos = Object.assign([], that.state.todos);
    var url = '/api/todos/' + id + '.json';
    var data = {
      id: id
    };

    var success = function (data) {
      console.log('deleted todo');
      var updatedTodos = currentTodos.filter(function (todo) {
        return todo.id !== id;
      });
      that.setState({
        todos: updatedTodos
      });
    };

    var error = function (xhr, status, err) {
      console.log('delete todo failed');
      console.log(err);
    };

    ajax(url, data, success, error, 'DELETE');
  }
  
};

module.exports = todoFuncs;