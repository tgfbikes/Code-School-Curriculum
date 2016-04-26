'use strict';

var React = require('react');
var TodoList = require('./TodoList');
var TodoForm = require('./TodoForm');

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
        },
      ]
    }
  },

  handleInputChange: function(key) {
    return function(evt) {
      var newInputs = Object.assign({}, this.state.inputs);
      newInputs[key].value = evt.target.value;
      this.setState({
        inputs: newInputs
      });
    }.bind(this);
  },

  addTodo: function(evt) {
    evt.preventDefault();

    var newTodos = Object.assign([], this.state.todos);
    var resetInputs = Object.assign({}, this.state.inputs);

    var newTodo = {
      title: this.state.inputs.title.value,
      description: this.state.inputs.description.value,
      done: false
    }
    resetInputs.title.value = '';
    resetInputs.description.value = '';

    newTodos.push(newTodo);
    this.setState({
      todos: newTodos,
      inputs: resetInputs
    });
  },

  deleteTodo: function(index) {

    var updatedTodos = Object.assign({}, this.state.todos);
    console.log('delete todo');
    console.log(index);

  },

  editTodo: function() {

    var updatedTodos = Object.assign({}, this.state.todos);
    console.log('edit todo');

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
           editTodo={this.editTodo}
           deleteTodo={this.deleteTodo}
         />
       </div>
     </div>
    );
  }
});

module.exports = Todo;
