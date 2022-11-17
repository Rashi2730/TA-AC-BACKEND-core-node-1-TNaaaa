var http = require('http');
var fs = require('fs');

var server = http.createServer(handleReq, handleCss);

function handleReq(req, res) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/index/style.css') {
      fs.createReadStream('../../index.html').pipe(res);
    } else if (req.url === '/about/style.css') {
      fs.createReadStream('../../about.html').pipe(res);
    } else if (req.url === '/blog/style.css') {
      fs.createReadStream('../../blog.html').pipe(res);
    } else if (req.url === '/cases/style.css') {
      fs.createReadStream('../../cases.html').pipe(res);
    } else if (req.url === '/contact/style.css') {
      fs.createReadStream('../../contact.html').pipe(res);
    } else if (req.url === '/services/style.css') {
      fs.createReadStream('../../services.html').pipe(res);
    }
  }
}

function handleCss(req, res) {
  if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('../assets/stylesheet/', (err, content) => {
      if (err) {
        console.log(err);
      } else {
        res.end(content);
      }
    });
  }
}
server.listen(3000, () => {
  console.log('server listening for 3000 port');
});
