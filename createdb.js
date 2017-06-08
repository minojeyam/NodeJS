var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Uki";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("Student", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
