
var fs = require('fs');
fs.writeFile('ukinode.txt', 'Uki.life is for studying Coding Programs', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
