'use strict';

var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    var id = this.props.id;
    var todoStatus = this.props.todoData.done ? ' todo--completed' : ' bg-info';
    var completedButtonText = this.props.todoData.done ? 'Not Completed' : 'Completed';
    return (
      <li className={"todo__list-item clearfix" + todoStatus}>
        <span><strong>{this.props.todoData.title}</strong>
        <br />
        - {this.props.todoData.description}</span>
        <div className="pull-right">
          <div className="btn btn-success btn-xs" onClick={this.props.completedTodo.bind(null, id)}>{completedButtonText}</div>
          <div className="btn btn-danger btn-xs" onClick={this.props.deleteTodo.bind(null, id)}>Delete</div>
        </div>
      </li>
    );
  }
});

module.exports = TodoListItem;
