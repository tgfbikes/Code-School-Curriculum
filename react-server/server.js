var express = require('express');
var app = new express();

// Routes for application
var appRouter = require('./routes/index');

app.use('/', appRouter);

app.listen(3000, function() {
  console.log('Server running..')
  console.log('Listening on port 3000...')
});
