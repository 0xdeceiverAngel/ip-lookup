var express = require('express');
var path = require('path');
var app = express();



app.set('view engine', 'pug');
app.set("views","myviews")

var indexRouter = require('./routes/index.js');

app.get('/', indexRouter);



app.listen(5000, function () {
  console.log('app listening on port 5000!');
});
module.exports = app;
