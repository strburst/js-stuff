var fs = require('fs');

fs.readdir(process.argv[2], function(err, text) {
  if (err) { throw err; }
  else { console.log(text); }
});

switch('str') {
  case 'str':
    console.log('hi');
    break;
  case 'other':
    console.log('hmm');
    break;
  default:
    console.log('hoo');
}
