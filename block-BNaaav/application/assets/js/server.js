var http = require('http');
var fs = require('fs');

var server = http.createServer(handleReq);

function handleReq(req, res) {
  if (req.url === '/') {
    fs.createReadStream('../../index.html').pipe(res);
  }
}
server.listen(3000, () => {
  console.log('server listening for 3000 port');
});
