'use strict';

var React = require('react');
var TodoList = require('./TodoList');
var TodoForm = require('./TodoForm');

var Todo = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    return (
     <div className="container">
       <div className="row">
         <TodoForm />
         <TodoList
           todos={this.state.todos}
         />
       </div>
     </div>
    );
  }
});

module.exports = Todo;
