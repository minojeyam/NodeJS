var fs = require('fs');

fs.unlink('ukinodejsexcersice.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
