var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { songName: 'Tum ku ho', film: 'Aashique 2', musicDirector: 'A S T', singer: 'Ajith Singh' };
  db.collection("songdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
