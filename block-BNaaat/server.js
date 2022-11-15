const fs = require('fs');
var http = require('http');
var server = http.createServer(handleReq);

function handleReq(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('./node.html', (err, cont) => {
      console.error(err);
      res.setHeader('Content-Type', 'text/html');
      res.end(cont);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('server listening to port 5555');
});
