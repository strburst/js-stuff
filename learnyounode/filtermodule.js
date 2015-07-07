var fs = require('fs');

module.exports = function(dir, ext, callback) {
  ext = '.' + ext;
  fs.readdir(dir, function(error, list) {
    if (error) {
      return callback(error);
    }
    var result = [];
    list.forEach(function(filename) {
      if (filename.slice(filename.length - ext.length) == ext) {
        result.push(filename);
      }
    })
    callback(null, result);
  });
}
