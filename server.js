var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var cors = require('cors');
var path = require('path');
var ObjectID = mongodb.ObjectID;

var COMPANIES_COLLECTION = "companies";

var app = express();
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/dist'));
app.use('/assets/stylesheets', express.static(path.join(__dirname, '/dist/assets/stylesheets')));
app.use(cors());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var mongodbURL = process.env.MONGODB_URI || 'mongodb://heroku_6pf1lq2q@ds113063.mlab.com:13063/heroku_6pf1lq2q';

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(mongodbURL, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/companies"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/companies", cors(), function(req, res) {
  db.collection(COMPANIES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/companies", cors(), function(req, res) {
  var newContact = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid company name", "Insert a company name.", 400);
  }

  db.collection(COMPANIES_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new company.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.put("/api/companies/:id", cors(), function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(COMPANIES_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update company");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/companies/:id", cors(), function(req, res) {
  db.collection(COMPANIES_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete company");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
