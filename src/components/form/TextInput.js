'use strict';

var React = require('react');

var TextInput = React.createClass({
  render: function() {
    return (
      <input
        type={this.props.inputConfig.type}
        id={this.props.inputConfig.id}
        value={this.props.inputConfig.inputValue}
        className={this.props.inputConfig.className}
        placeholder={this.props.inputConfig.placeholder}
        onChange={this.props.changeHandler}
      />
    );
  }
});

module.exports = TextInput;
