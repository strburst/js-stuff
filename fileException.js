var fs = require('fs');

try {
  console.log(fs.createReadStream('/etc/shadow'));
} catch (error) {
  console.log('Caught');
  console.log(error);
}
