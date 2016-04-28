var express = require('express');

var app = new express();

app.get('/', function(req, res) {
  res.send('this is working');
});

app.listen(3000, function() {
  console.log('Server running..')
  console.log('Listening on port 3000...')
});
