'use strict'

var dao = require('../dao/dao');

/**
 * Function to add a new POI on database
 */
this.add = function(req, resp) {
  return dao.insert(req)
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
  return dao.findAll(req)
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
  return dao.update(req)
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
