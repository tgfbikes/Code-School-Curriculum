var express = require('express');
var path = require('path');
var jade = require('jade');
var app = new express();

// Use jade for template engine
app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'jade');

// Set up static routes
app.use(express.static(__dirname + '/public'));

// Routes for application
var appRouter = require('./routes/index');

app.use('/', appRouter);

app.listen(3000, function() {
  console.log('Server running..');
  console.log('Listening on port 3000...');
});
