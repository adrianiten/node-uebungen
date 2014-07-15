var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200,
    {'content-type': 'text/plain; charset=utf-8'});
  response.write('Hoi ');
  response.end('Welt\n');
}).listen(8080, '127.0.0.1');
console.log('Server läuft');
