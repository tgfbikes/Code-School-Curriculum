'use strict';

var React = require('react');
var TodoListItem = require('./TodoListItem');

var TodoList = React.createClass({

  render: function() {
    var todos = this.props.todos;
    var listOfTodos;

    if (todos.length === 0) {
      listOfTodos = (
        <p>No current tasks</p>
      );
    } else {
      listOfTodos = (
        <ul className="list-unstyled">
          {todos.map((todo, index) => {
            return (
              <TodoListItem
                key={index}
                index={index}
                todoData={todo}
                completedTodo={this.props.completedTodo}
                deleteTodo={this.props.deleteTodo}
              />
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
