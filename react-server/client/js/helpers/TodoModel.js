'use strict';

// Following Constructor Pattern

function Todo(id, title, description, done) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.done = done;
}

module.exports = Todo;