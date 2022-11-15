// // var http = require('http');
// // var server = http.createServer(handleReq);

// // function handleReq(req, res) {
// //   console.log(req);
// //   res.write('WOOSH');
// //   res.end();
// // }

// // server.listen(5000, () => {
// //   console.log('Server listening to port 5000');
// // });

// // //////////////////////////////////////////////////////

// // var http = require('http');
// // var server = http.createServer(handleReq);

// // function handleReq(req, res) {
// //   console.log(req);
// //   res.write('WOOSH');
// //   res.end();
// // }

// // server.listen(5100, () => {
// //   console.log('My first server in NodeJS using response object');
// // });

// // ///////////////////////////////////////////////////

// // var http = require('http');
// // var server = http.createServer(handleReq);

// // function handleReq(req, res) {
// //   console.log(req.headers);
// //   res.end(req.headers.connection);
// // }

// // server.listen(5555, () => {
// //   console.log('My first server in NodeJS using response object');
// // });

// // ///////////////////////////////////////////////////////

// // var http = require('http');
// // var server = http.createServer(handleReq);

// // function handleReq(req, res) {
// //   console.log(req.method, req.url);
// //   res.write('Welcome to node');
// //   res.end();
// // }

// // server.listen(5566, () => {
// //   console.log('My first server in NodeJS using response object');
// // });

// // ///////////////////////////////////////////////////////////////////

// // var http = require('http');
// // var server = http.createServer(handleReq);

// // function handleReq(req, res) {}

// // server.listen(7000, () => {
// //   console.log('server listening on port 7000');
// // });

// // /////////////////////////////////////////////////////////////////

// // var http = require('http');
// // var server = http.createServer(handleReq);

// // function handleReq(req, res) {
// //   res.statusCode = 202;
// //   res.end();
// // }

// // server.listen(3333, () => {
// //   console.log('server listening on port 3333');
// // });

// // /////////////////////////////////////////////////////////////

// // var http = require('http');
// // var server = http.createServer(handleReq);

// // function handleReq(req, res) {
// //   res.setHeader('Content-Type', 'text/html');
// //   res.end('<h3>Welcome to AltCampus</h3>');
// // }

// // server.listen(8000, () => {
// //   console.log('server listening on port 8000');
// // });

// // ////////////////////////////////////////////////////////////

// var http = require('http');
// var server = http.createServer(handleReq);

// function handleReq(req, res) {
//   res.writeHeader('202', { 'Content-Type': 'text/html' });
//   res.end('<h3>Welcome to AltCampus</h3>');
// }

// server.listen(8000, () => {
//   console.log('server listening on port 8000');
// });

// ////////////////////////////////////////////////////////////////////

// var http = require('http');
// var server = http.createServer(handleReq);

// function handleReq(req, res) {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(`{success: true, message: 'Welcome to Nodejs'}`);
// }

// server.listen(8888, () => {
//   console.log('server listening on port 8888');
// });

// ////////////////////////////////////////////////////////////////
// var http = require('http');
// var server = http.createServer(handleReq);

// function handleReq(req, res) {
//   console.log(req);
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h2>posted for first time</h2>');
// }

// server.listen(5050, () => {
//   console.log('server listening on port 5050');
// });

///////////////////////////////////////////////////

// var http = require('http');
// var server = http.createServer(handleReq);

// function handleReq(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('RASHI ISRANI');
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h2>RASHI ISRANI</h2>');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h2>ERROR</h2>');
//   }
// }

// server.listen(2345, () => {
//   console.log('server listening on port 2345');
// });

/////////////////////////////////////////////

//
//////////////////////////////////

var url = require('url');
var http = require('http');
var server = http.createServer(handleReq);

function handleReq(req, res) {
  var parsedUrl = parse(url);
  var pathname = parsedUrl.pathname;
  console.log(parsedUrl);
  if (req.method === 'GET' && req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<input  placeholder ="name"></input>');
    res.write('<input placeholder ="email"></input>');
    res.end();
  } else if (req.method === 'POST' && req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Posted for the 2nd time');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>ERROR</h2>');
  }
}

server.listen(2345, () => {
  console.log('server listening on port 2345');
});
