// Dependencies for app from node modules
var bodyParser = require('body-parser');
var express    = require('express');
var jade       = require('jade');
var path       = require('path');
var mongoose   = require('mongoose');

// Create new app based off of Express prototype
var app = new express();

// Set up for parsing application/json
app.use(bodyParser.json());
// Set up for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use jade for template engine
app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'jade');

// Set up static routes
app.use(express.static(__dirname + '/public'));

// Mongoose connection to MongoDB
// mongoose.connect('mongodb://sking:P@$$word@ds043714.mongolab.com:43714/todos');
mongoose.connect('mongodb://localhost/todos');

// Routes for application
require('./routes/index')(app);

app.listen(3000, function() {
  console.log('Server running..');
  console.log('Listening on port 3000...');
});
