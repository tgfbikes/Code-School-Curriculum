'use strict';

var React = require('react');

var TextInput = React.createClass({
  render: function() {
    return (
      <input
        type={this.props.inputConfig.type}
        id={this.props.inputConfig.id}
        name={this.props.inputConfig.name}
        ref={this.props.inputConfig.name}
        value={this.props.inputConfig.value}
        className={this.props.inputConfig.className}
        placeholder={this.props.inputConfig.placeholder}
        onChange={this.props.changeHandler}
      />
    );
  }
});

module.exports = TextInput;
