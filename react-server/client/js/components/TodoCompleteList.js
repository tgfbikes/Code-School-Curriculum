'use strict';

var React = require('react');


var TodoCompleteList = React.createClass({
  render: function () {
    var completedTodos = this.props.completedTodos;
    if (completedTodos.length === 0) {
      var listOfCompletedTodos = (
        <p>No completed tasks</p>
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