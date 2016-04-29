var express = require('express');
var exphbs = require('express-handlebars');
var app = new express();

// Set up static routes
app.use('/static', express.static(__dirname + '/views'));

// Use HTML for template engine
app.set('views', './views');
app.set('view engine', 'exphbs');

// Routes for application
var appRouter = require('./routes/index');

app.use('/', appRouter);

app.listen(3000, function() {
  console.log('Server running..');
  console.log('Listening on port 3000...');
});
