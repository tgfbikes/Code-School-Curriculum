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
          value: '',
          className: 'form-control',
          placeholder: 'Title',
        },
        description: {
          type: 'text',
          id: 'description',
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
    console.log('addTodo clicked!');
  },
  render: function() {
    console.log(this.state.inputs.description.value);
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
         />
       </div>
     </div>
    );
  }
});

module.exports = Todo;
