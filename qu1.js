var http = require('http');
var dt = require('./myfird');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Average: " + dt.ave(123,321));
    res.end();
}).listen(8080);
