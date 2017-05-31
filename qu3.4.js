var fs = require('fs');

fs.rename('ukinode.txt', 'ukinodejsexcersice.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
