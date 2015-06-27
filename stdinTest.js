process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk != null) {
    process.stdout.write(chunk);
    process.stdout.write('\n');
    process.stdout.write('\n');
  }
});

// process.stdin.on('end', function() {
//   process.stdout.write('end\n');
// });
