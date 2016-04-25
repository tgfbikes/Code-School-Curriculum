'use strict';

var React = require('react');

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className="col-md-6">
        <h2>Add a Task</h2>
        <form onSubmit={this.props.addTodo}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" placeholder="Description" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
