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
          {todos.map(function(todo, index){
            return (
              <TodoListItem
                key={index}
                index={index}
                todoData={todo}
                editTodo={this.props.editTodo}
                deleteTodo={this.props.deleteTodo}
              />
            );
          }.bind(this))}
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
