var React = require('react');
var Todo = require('./components/Todo');

var App = React.createClass({
  render: function() {
    return (
      <Todo />
    );
  }
});

React.render(<App />, document.getElementById('app'));
