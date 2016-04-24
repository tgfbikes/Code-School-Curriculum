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
          done: false
        },
        {
          title: 'Don\'t cut hair',
          done: false
        },
        {
          title: 'Wear coding shirts',
          done: false
        },
        {
          title: 'Use big words to sound smart',
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
