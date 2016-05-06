'use strict';

var React = require('react');


var TodoCompleteList = React.createClass({
  render: function () {
    return (
      <div className="col-md-4">
        <h2>Completed Tasks</h2>
      </div>
    );
  }
});

module.exports = TodoCompleteList;