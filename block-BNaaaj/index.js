console.log('WELCOME TO NODE.JS');

var os = require('os');
var fs = require('fs');
var freeM = os.freemem();
var cpus = os.cpus().length;
var uptime = os.uptime();
var ver = os.version();

console.log(freeM);
console.log(cpus);
console.log(uptime);
console.log(ver);

fs.readFile('./index.md', (err, content) => {
  console.log(err, content);
});

fs.unlink('./index.md', (err) => {
  if (err) throw error;
  console.log('path/file.txt was deleted');
});

