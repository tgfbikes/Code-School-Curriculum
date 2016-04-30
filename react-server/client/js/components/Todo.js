'use strict';

var React    = require('react');
var TodoList = require('./TodoList');
var TodoForm = require('./TodoForm');
var ajax     = require('../helpers/ajax');

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
        {
          title: 'Stop shaving',
          description: 'To look hip',
          done: false
        },
        {
          title: 'Don\'t cut hair',
          description: 'To also look hip',
          done: false
        },
        {
          title: 'Wear coding shirts',
          description: 'Everyone must know we code',
          done: false
        },
        {
          title: 'Use big words to sound smart',
          description: 'ie polymorphism and interpolation',
          done: false
        }
      ]
    }
  },

  componentWillMount: function () {
    var that = this;
    var url = '/api/todos.json';
    var data = {};
    var success = function(data) {
      var todos = Object.assign([], that.state.todos);
      console.log(data);
    };
    var error = function (xhr, status, err) {
      console.log(err);
    };
    
    ajax(url, data, success, error);
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

    var newTodos = Object.assign([], this.state.todos);
    var resetInputs = Object.assign({}, this.state.inputs);

    var newTodo = {
      title: this.state.inputs.title.value,
      description: this.state.inputs.description.value,
      done: false
    };
    resetInputs.title.value = '';
    resetInputs.description.value = '';

    newTodos.push(newTodo);
    this.setState({
      todos: newTodos,
      inputs: resetInputs
    });
  },

  deleteTodo: function(index) {
    var updatedTodos = Object.assign([], this.state.todos);

    console.log('delete todo');
    updatedTodos.splice(index, 1);
    this.setState({
      todos: updatedTodos
    });
  },

  completedTodo: function(index) {
    var updatedTodos = Object.assign([], this.state.todos);

    console.log('completed todo');
    updatedTodos[index].done = true;
    this.setState({
      todos: updatedTodos
    });

  },


  render: function() {
    console.log(this.state.todos);
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
