var http = require('http');

var server = http.createServer(handlereq);

function handlereq(req, res) {
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.write('Hello');
  res.write('World');
  res.end('<h1>BOOM</h1>');
}

server.listen(4444, () => {
  console.log('Server listening to port 4444');
});
