var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("songdetails").find({},{singer:1,_id:0}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
