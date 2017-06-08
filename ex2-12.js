var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name:"John",maths_marks:87,english_marks:23 };
  db.collection("studentmarks").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
})
