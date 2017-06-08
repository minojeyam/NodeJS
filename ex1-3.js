var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { Songname: 'Thaniye Thananthaniye', Film: 'Rhythm',Music Director:'A.R.Rahman', Singer:'Shankar mahadevan'},
    { Songname: 'Evano Oruvan', Film: 'Alai Payuthey',Music Director:'A.R.Rahman', Singer:'Swarnalatha'},
    { Songname: 'Roja Poonthottam', Film: 'Kannukkul Nilavu',Music Director:'Ilaiyaraaja', Singer:'Unnikrishnan,Anuradha Sriram'},
    { Songname: 'Vennilavae Vinnaithaandi', Film: 'Minsara Kanavu',Music Director:'A.R.Rahman', Singer:'Hariharan,Sadhana Sargam'},
    { Songname: 'Sollamal Thottu Chellum Thendral', Film: 'Dheena',Music Director:'Yuvan Shankar Raja', Singer:'Hariharan'}
  ];
  db.collection("songdetails").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
