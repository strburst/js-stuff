var trans = require('./transmorgify');

// console.log(trans.a());

var fs = require('fs');

fs.readFile(process.argv[2], "utf8", function(err, text) {
  if (err) { throw err; }
  else { console.log(text); }
});
