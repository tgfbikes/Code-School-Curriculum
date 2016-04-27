'use strict';

var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    var index = this.props.index;
    return (
      <li className="todo__list-item">
        <span><strong>{this.props.todoData.title}</strong>
        <br />
        - {this.props.todoData.description}</span>
        <div className="pull-right">
          <div className="btn btn-warning btn-sm" onClick={this.props.editTodo.bind(null, index)}>Edit</div>
          <div className="btn btn-danger btn-sm" onClick={this.props.deleteTodo.bind(null, index)}>Delete</div>
        </div>
      </li>
    );
  }
});

module.exports = TodoListItem;
