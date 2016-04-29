var express = require('express');
var path = require('path');
var jade = require('jade');
var mongoose = require('mongoose');
var app = new express();

// Use jade for template engine
app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'jade');

// Set up static routes
app.use(express.static(__dirname + '/public'));

// Mongoose connection to MongoDB
mongoose.connect('mongodb://sking:P@$$word@ds043714.mlab.com:43714/todos');

// Routes for application
require('./routes/index')(app);

app.listen(3000, function() {
  console.log('Server running..');
  console.log('Listening on port 3000...');
});
