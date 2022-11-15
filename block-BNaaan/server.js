var http = require('http');

var server = http.createServer(handleReq);

function handleReq(req, res) {
  console.log(req.url, req.method);
  console.log(req.headers);
  res.end('THE END');
}

server.listen(3000, () => {
  console.log('Server listening to port 4000');
});
