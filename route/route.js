'use strict'

var express = require('express');
var router = express.Router();
var cors = require('cors');
var controller = require('../controller/controller');

/**
 * Router to make a GET and retrieve all companies on database
 */
router.get('/api/companies', function(req, resp) {
  controller.get(req, resp);
});

/**
 * Router to make a POST and create a company on database
 */
router.post('/api/companies', function(req, resp) {
  controller.add(req, resp);
});

/**
 * Router to make a PUT and update a company on database
 */
router.put('/api/companies/:id', function(req, resp) {
  controller.update(req, resp);
});

/**
 * Router to make a DELETE and remove a company on database
 */
router.delete('/api/companies/:id', function(req, resp) {
  controller.delete(req, resp);
});

module.exports = router;
