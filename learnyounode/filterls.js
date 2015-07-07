var fs = require('fs');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(error, list) {
  list.forEach(function(filename) {
    if (filename.slice(filename.length - ext.length) == ext) {
      console.log(filename);
    }
  })
});
