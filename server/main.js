var express = require('express');

var app  = new express();
var port = 7777;

app.get('/', function(req, res) {
  res.render('../app/index.ejs', {});
})
  .listen(port);
