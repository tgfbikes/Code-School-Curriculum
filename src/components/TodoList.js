'use strict';

var React = require('react');

var TodoList = React.createClass({
  render: function() {
    var todos = this.props.todos;
    var listOfTodos;
    if (!todos) {
      listOfTodos = (
        <p>No current tasks</p>
      );
    } else {
      listOfTodos = (
        <ul>
          {todos.map(function(todo, index){
            return <li key={index}>{todo.title}</li>
          })}
        </ul>
      );
    }
    return (
      <div className="col-md-6">
        <h2>Things To Do</h2>
        {listOfTodos}
      </div>
    );
  }
});

module.exports = TodoList;
