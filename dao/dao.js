'use strict'

var Promise = require('bluebird');
var mongodb = require('mongodb');
var assert = require('assert');

var db;
var ObjectID = mongodb.ObjectID;
var mongodbURL = process.env.MONGODB_URI || 'mongodb://heroku_6pf1lq2q@ds113063.mlab.com:13063/heroku_6pf1lq2q';
var COMPANIES_COLLECTION = "companies";

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(mongodbURL, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");
});

/**
 * Abstraction to get all companies on database
 * @returns {Promise<Array>}
 */
this.findAll = function() {
  return new Promise(function(resolve, reject) {
    db.collection(COMPANIES_COLLECTION).find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      resolve(docs);
    });
  });
};

/**
 * Abstraction to insert a company on database
 * @param  {object} obj - object to persist
 * @returns {Promise<Object>}
 */
this.insert = function(obj) {
  return new Promise(function(resolve, reject) {
    db.collection(COMPANIES_COLLECTION).insertOne(obj, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new company.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  });
};

/**
 * Abstraction to delete a company on database
 * @param  {str} obj - object to update
 * @returns {Promise<Object>}
 */
this.update = function(obj) {
  return new Promise(function(resolve, reject) {
    db.collection(COMPANIES_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, obj, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new company.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  });
};

/**
 * Abstraction to update a company on database
 * @returns {Promise<Object>}
 */
this.delete = function(id) {
  return new Promise(function(resolve, reject) {
    db.collection(COMPANIES_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
      if (err) {
        handleError(res, err.message, "Failed to delete company");
      } else {
        res.status(200).json(req.params.id);
      }
    });
  });
};

module.exports = this
