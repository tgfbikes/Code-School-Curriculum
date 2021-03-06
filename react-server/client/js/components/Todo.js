'use strict';

var React             = require('react');
var TodoList          = require('./TodoList');
var TodoForm          = require('./TodoForm');
var TodoCompletedList = require('./TodoCompleteList');
var todoFuncs         = require('../helpers/todoFuncs');

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
          placeholder: 'Title'
        },
        description: {
          type: 'text',
          id: 'description',
          name: 'description',
          value: '',
          className: 'form-control',
          placeholder: 'Description'
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
      ],
      completedTodos: []
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
    todoFuncs.create(this);
  },

  deleteTodo: function(id, done) {
    todoFuncs.delete(this, id, done);
  },

  completedTodo: function(id, done) {
    todoFuncs.update(this, id, done);
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
         <TodoCompletedList
           completedTodos={this.state.completedTodos}
           completedTodo={this.completedTodo}
           deleteTodo={this.deleteTodo}
         />
       </div>
     </div>
    );
  }
});

module.exports = Todo;
