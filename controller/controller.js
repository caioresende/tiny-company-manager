'use strict'

var Promise = require('bluebird');
var dao = require('../dao/dao');

/**
 * Function to add a new POI on database
 */
this.add = function(req, resp) {
  Promise.resolve()
  .then(function(req) {
    return dao.insert(req)
  })
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
  .then(function() {
    return dao.findAll(req);
  })
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
this.put = function(req, resp) {
  Promise.resolve()
  .then(function() {
    return dao.update(req);
  })
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
  .then(function() {
    return dao.delete(req);
  })
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
