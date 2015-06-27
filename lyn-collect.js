var http = require('http');

var url = process.argv[2];
var accum = '';

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(text) {
    accum += text;
  });
  response.on('end', function() {
    console.log(accum.length);
    console.log(accum);
  });
});
