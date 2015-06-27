function f(a){
  'use strict';
  a = 42;
  return [a, arguments[0]];
}

// console.log(f(17));

function intersperse(ch, str) {
  var result = '';
  for (var i = 0; i < str.length - 1; i++) {
    result += str.charAt(i) + ch;
  }
  result += str.charAt(str.length - 1);
  return result;
}

var intersperseF = intersperse.bind({}, 'f');
