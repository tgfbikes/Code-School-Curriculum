'use strict';

var React        = require('react');
var TodoListItem = require('./TodoListItem');


var TodoCompleteList = React.createClass({
  render: function () {
    var listOfCompletedTodos;
    var completedTodos = this.props.completedTodos;
    if (completedTodos.length === 0) {
      listOfCompletedTodos = (
        <p>No completed tasks</p>
      );
    } else {
      listOfCompletedTodos = (
        <ul className="list-unstyled">
          {completedTodos.map(function(todo, index){
            return (
              <TodoListItem
                key={index}
                id={todo.id}
                done={todo.done}
                todoData={todo}
                completedTodo={this.props.completedTodo}
                deleteTodo={this.props.deleteTodo}
              />
            );
          }.bind(this))}
        </ul>
      );
    }
    return (
      <div className="col-md-4">
        <h2>Completed Tasks</h2>
        {listOfCompletedTodos}
      </div>
    );
  }
});

module.exports = TodoCompleteList;