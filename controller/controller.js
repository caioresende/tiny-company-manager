'use strict'

var Promise = require('bluebird');
var dao = require('../dao/dao');

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/**
 * Function to add a new POI on database
 */
this.add = function(req, resp) {
  Promise.resolve()
  dao.insert(req)
  .then(function(doc) {
    resp.status(201);
    resp.json(doc);
  })
  .catch(function(err) {
    resp.status(err.statusCode || 500);
    resp.json({status: err.statusCode || 500, message: err.message});
  });
};

/**
 * Function to get all companies on database
 */
this.get = function(req, resp) {
  Promise.resolve()
  dao.findAll(req)
  .then(function(doc) {
    resp.status(201);
    resp.json(doc);
  })
  .catch(function(err) {
    resp.status(err.statusCode || 500);
    resp.json({status: err.statusCode || 500, message: err.message});
  });
};

/**
 * Function to get all companies on database
 */
this.update = function(req, resp) {
  dao.update(req)
  .then(function(doc) {
    resp.status(201);
    resp.json(doc);
  })
  .catch(function(err) {
    resp.status(err.statusCode || 500);
    resp.json({status: err.statusCode || 500, message: err.message});
  });
};

/**
 * Function to get all companies on database
 */
this.delete = function(req, resp) {
  Promise.resolve()
  return dao.delete(req)
  .then(function(doc) {
    resp.status(201);
    resp.json(doc);
  })
  .catch(function(err) {
    resp.status(err.statusCode || 500);
    resp.json({status: err.statusCode || 500, message: err.message});
  });
};

module.exports = this;
