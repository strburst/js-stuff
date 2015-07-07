var Handlebars = require('handlebars');
var fs = require('fs');
var http = require('http');

var page = fs.readFileSync('index.hbs').toString();

var makePage = Handlebars.compile(page);

var data = {
  name: 'Alice',
  otherpeople: [
    {name: 'Bob', age: 22},
    {name: 'Carol', age: 12},
    {name: 'Dan', age: 37},
    {name: 'Eve', age: 45}
  ],
  icecreams: ['chocolate', 'strawberry', 'vanilla'],
  page: 'Alice and Bob'
};

Handlebars.registerHelper('wikipedia', function(options) {
  return '<a href="http://en.wikipedia.org/wiki/' + options.fn(this) + '">' +
    options.fn(this) + '</a>';
});

var server = http.createServer(function (request, response) {
  console.log('%s request for %s', request.method, request.url);

  response.writeHead(200, {'Content-Type:': 'text/html'});

  response.write(makePage(data));

  response.end();
});

server.listen(8888);
