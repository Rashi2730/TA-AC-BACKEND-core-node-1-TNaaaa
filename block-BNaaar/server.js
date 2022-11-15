var url = require('url');
var http = require('http');
const path = require('path');
var server = http.createServer(handleReq);

function handleReq(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Welcome to homepage');
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'app/json');
    res.write('{message: this is a post request}');
    res.end();
  } else {
    res.writeHeader(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
}

server.listen(5000, () => {
  console.log('server is listening to port 5K');
});
