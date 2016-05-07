'use strict';

var ajax = require('./ajax');

var todoFuncs = {
  
  index: function (that) {
    var url = '/api/todos.json';    // Path to get all todos from data base
    var data = {};
    var success = function(data) {  // Ok, data is an object with objects inside i.e. { {...}, {...}, ... }
      var updatedTodos = Object.assign([], that.state.todos); // We don't want to directly mess with todos on state
      var updatedCompletedTodos = Object.assign([], that.state.completedTodos);

      for (var key in data) {                   // We iterate over the main object 'data' to get access to the other objects
        if (data.hasOwnProperty(key)) {         // Convention for making sure we don't pull any data from prototype
          var todoData = data[key];             // Grap the object at data[key] -- key will be the place the object is located
          var todo = {                          // Create a new todo object literal from each object in data object
            id: todoData._id,
            title: todoData.title,
            description: todoData.description,
            done: todoData.done
          };
          if (todo.done) {                      // Each todo we create, we want to push to updatedTodos or updatedCompletedTodos
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
  
  // todo: passing in done flag, move to one list or the other
  update: function (that, id, done) {
    var updatedTodos = Object.assign([], that.state.todos);
    var updatedCompletedTodos = Object.assign([], that.state.completedTodos);
    var url = '/api/todos/' + id + '.json';
    var data = {};

    if (done) {
      // Get from completedTodos
      updatedCompletedTodos.forEach(function (todo) {
        if (todo.id === id) {
          todo.done = false;
          data = todo;
        } else {
          console.log('todo not found in array');
        }
      });
      
    } else {
      // Get from todos
      updatedTodos.forEach(function (todo) {
        if (todo.id === id) {
          todo.done = true;
          data = todo;
        } else {
          console.log('todo not found in array');
        }
      });
    }

    var success = function (data) {
      console.log(data);
      if (data.done) {
        updatedCompletedTodos.forEach(function (todo, index) {
          if (todo.id === data._id) {
            updatedCompletedTodos.splice(index, 1);
          }
        });
        updatedTodos.push(data);
      } else {
        updatedTodos.forEach(function (todo, index) {
          if (todo.id === data._id) {
            updatedTodos.splice(index, 1);
          }
        });
        updatedCompletedTodos.push(data);
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

    ajax(url, data, success, error, 'PUT');
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