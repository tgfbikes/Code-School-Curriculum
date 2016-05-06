'use strict';

var React = require('react');
var TextInput = require('./form/TextInput');

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <h2>Add a Task</h2>
        <form onSubmit={this.props.addTodo}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <TextInput
              inputConfig={this.props.inputConfig.title}
              changeHandler={this.props.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <TextInput
              inputConfig={this.props.inputConfig.description}
              changeHandler={this.props.changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
