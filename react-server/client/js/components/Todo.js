'use strict';

var React     = require('react');
var TodoList  = require('./TodoList');
var TodoForm  = require('./TodoForm');
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
    todoFuncs.create(this);
  },

  deleteTodo: function(id) {
    todoFuncs.delete(this, id);
  },

  completedTodo: function(id) {
    todoFuncs.update(this, id);
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
