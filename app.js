var express = require('express');
var path = require('path');
var app = express();



app.set('view engine', 'jade');
app.set("views","myviews")

var indexRouter = require('./routes/index.js');

app.get('/', indexRouter);



app.listen(80, function () {
  console.log('app listening on port 80!');
});
module.exports = app;
