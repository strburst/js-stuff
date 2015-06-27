var example = {
  method: 'GET',
  hostname: 'www.example.com'
};

var codeless = {
  method: 'GET',
  hostname: 'www.thecodelesscode.com'
};

var callback = function(response) {
  var body = '';
  response on('data', function(chunk) {
    body += chunk;
  });
  response on('end', function() {
    console log(body);
  });
};

