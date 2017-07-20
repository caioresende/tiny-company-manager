'use strict'

var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var cors = require('cors');
var path = require('path');

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/dist'));
app.use('/assets/stylesheets', express.static(path.join(__dirname, '/dist/assets/stylesheets')));

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

app.use(require('./route/route'));
