var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Uki";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'Shama', address: 'Jaffna'},
    { name: 'Abi', address: 'Sulipuram'},
    { name: 'Janusha', address: 'Earlali'},
    { name: 'Dilani', address: 'Karanagar'},
    { name: 'Thuva', address: 'Jaffna'},
    { name: 'Jackson', address: 'Jaffna'},
    { name: 'Thanesan', address: 'Velani'},
    { name: 'Jana', address: 'Velani'},
    { name: 'Mayori', address: 'Velani'},
    { name: 'Ramana', address: 'Nilliyadi'},
    { name: 'Tharsan', address: 'Thondamanaru'},
    { name: 'Thadcha', address: 'Nilliyadi'},
    { name: 'Keerthana', address: 'Vavuniya'},
    { name: 'Mino', address: 'Jaffna'}
  ];
  db.collection("Student").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
