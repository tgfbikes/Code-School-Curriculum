'use strict';

var React     = require('react');
var TodoList  = require('./TodoList');
var TodoForm  = require('./TodoForm');
var ajax      = require('../helpers/ajax');
var todoFuncs = require('../helpers/todoFuncs');

var Todo = React.createClass({

  getInitialState: function() {
    return {
      inputs: {
        title: {
          type: 'text',
          id: 'title',
          name: 'title',
          value: '',
          className: 'form-control',
          placeholder: 'Title',
        },
        description: {
          type: 'text',
          id: 'description',
          name: 'description',
          value: '',
          className: 'form-control',
          placeholder: 'Description',
        }
      },
      todos: [
        // {
        //   title: 'Stop shaving',
        //   description: 'To look hip',
        //   done: false
        // },
        // {
        //   title: 'Don\'t cut hair',
        //   description: 'To also look hip',
        //   done: false
        // },
        // {
        //   title: 'Wear coding shirts',
        //   description: 'Everyone must know we code',
        //   done: false
        // },
        // {
        //   title: 'Use big words to sound smart',
        //   description: 'ie polymorphism and interpolation',
        //   done: false
        // }
      ]
    }
  },

  componentWillMount: function () {
    todoFuncs.index(this);
  },

  handleInputChange: function(evt) {
    var newInputs = Object.assign({}, this.state.inputs);
    newInputs[evt.target.name].value = evt.target.value;
    this.setState({
      inputs: newInputs
    });
  },

  addTodo: function(evt) {
    evt.preventDefault();

    var that = this;
    var newTodos = Object.assign([], this.state.todos);
    var resetInputs = Object.assign({}, this.state.inputs);
    var url = '/api/todos.json';
    var data = {
      title: this.state.inputs.title.value,
      description: this.state.inputs.description.value,
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

  deleteTodo: function(id) {
    var that = this;
    var currentTodos = Object.assign([], this.state.todos);
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
  },

  completedTodo: function(id) {
    var that = this;
    var updatedTodos = Object.assign([], this.state.todos);
    var url = '/api/todos/' + id + '.json';
    var data = {};

    updatedTodos.forEach(function (todo) {
      if (todo.id === id) {
        if (todo.done === false) {
          todo.done = true;
          data = todo;
        } else {
          todo.done = false;
          data = todo;
        }
      } else {
        console.log('todo not found in array');
      }
    });
    
    var success = function (data) {
      updatedTodos.forEach(function (todo) {
        if (todo.id === data._id) {
          console.log(todo);
          todo = data;
        }
      });

      that.setState({
        todos: updatedTodos
      });
    };
    
    var error = function (xhr, status, err) {
      console.log('updated todo failed');
      console.log(err);
    };
    
    ajax(url, data, success, error, 'PUT');
  },

  render: function() {
    return (
     <div className="container">
       <div className="row">
         <TodoForm
           addTodo={this.addTodo}
           inputConfig={this.state.inputs}
           changeHandler={this.handleInputChange}
         />
         <TodoList
           todos={this.state.todos}
           completedTodo={this.completedTodo}
           deleteTodo={this.deleteTodo}
         />
       </div>
     </div>
    );
  }
});

module.exports = Todo;
