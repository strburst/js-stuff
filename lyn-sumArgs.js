console.log(process.argv.slice(2).reduce(function(prev, curr) {
  return prev + parseInt(curr);
}, 0));
