var url = require(url);

var parsedUrl = url.parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit',
  true
);

console.log(parsedUrl);
