'use strict';

var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    return (
      <li className="todo__list-item">
        <span><strong>{this.props.todoData.title}</strong>
        <br />
        - {this.props.todoData.description}</span>
        <div className="pull-right">
          <a className="btn btn-warning btn-sm">Edit</a>
          <a className="btn btn-danger btn-sm">Delete</a>
        </div>
      </li>
    );
  }
});

module.exports = TodoListItem;
