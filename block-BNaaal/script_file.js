var http = require('http');

var server = http.createServer(handleReq);

function handleReq(req, res) {
  console.log(req, res);
  res.end('THE END');
}

server.listen(4000, () => {
  console.log('Server listening to port 4000');
});
