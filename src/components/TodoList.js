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
        <ul className="list-unstyled">
          {todos.map(function(todo, index){
            return (
              <li className="todo__list-item" key={index}>
                <span><strong>{todo.title}</strong> - {todo.description}</span>
                <br />
                <button className="btn btn-warning btn-xs">Edit</button>
                <button className="btn btn-danger btn-xs">Delete</button>
              </li>
            );
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
