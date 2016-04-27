'use strict';

var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    var index = this.props.index;
    var todoStatus = this.props.todoData.done ? ' bg-success' : ' bg-info';
    console.log(todoStatus);
    return (
      <li className={"todo__list-item clearfix" + todoStatus}>
        <span><strong>{this.props.todoData.title}</strong>
        <br />
        - {this.props.todoData.description}</span>
        <div className="pull-right">
          <div className="btn btn-success btn-sm" onClick={this.props.completedTodo.bind(null, index)}>Completed</div>
          <div className="btn btn-danger btn-sm" onClick={this.props.deleteTodo.bind(null, index)}>Delete</div>
        </div>
      </li>
    );
  }
});

module.exports = TodoListItem;
