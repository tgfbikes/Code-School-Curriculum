'use strict';

var mongoose = require('mongoose'); // Mongoose from node modules
var Schema = mongoose.Schema; // Schema function

// create a todo schema based off of the mongoose Schema prototype
var todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  done: Boolean
});

// Give a singular name for our model based off of our schema.
// Mongoose will automatically look for plural versions of model
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;