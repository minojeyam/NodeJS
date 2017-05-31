var fs = require('fs');

fs.appendFile('ukinode.txt', 'In Uki There are 15 students. Our lecturers are Vithu Anna and Dharshi Akka', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
