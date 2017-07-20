'use strict'

var express = require('express');
var app = express();
var cors = require('cors');
var controller = require('../controller/controller');

//Allow cross origin requests
express().use(cors());

/**
 * Router to make a GET and retrieve all companies on database
 */
app.get('/api/companies', cors(), function(req, resp) {
  controller.get(req, resp);
});

/**
 * Router to make a POST and create a company on database
 */
app.post('/api/companies', cors(), function(req, resp) {
  controller.add(req, resp);
});

/**
 * Router to make a PUT and update a company on database
 */
app.put('/api/companies/:id', cors(), function(req, resp) {
  controller.update(req, resp);
});

/**
 * Router to make a DELETE and remove a company on database
 */
app.delete('/api/companies/:id', cors(), function(req, resp) {
  controller.delete(req, resp);
});

module.exports = app;
