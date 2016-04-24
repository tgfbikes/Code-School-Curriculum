'use strict';

var React = require('react');

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className="col-md-6">
        <h2>Add a Task</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Todo title" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Password</label>
            <input type="text" className="form-control" id="description" placeholder="description" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
