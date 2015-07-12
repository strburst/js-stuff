// https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour

// Write three functions that compute the sum of the numbers in a given list
// using a for-loop, a while-loop, and recursion.
function forSum(arr) {
  var accum = 0;
  for (var i = 0; i < arr.length; i++) {
    accum += arr[i];
  }
  return accum;
}

function whileSum(arr) {
  var accum = 0;
  var i = 0;
  while (i < arr.length) {
    accum += arr[i];
    i++;
  }
  return accum;
}

function recursiveSum(arr) {
  return arr.length > 0 ? arr[0] + recursiveSum(arr.slice(1)) : 0;
}

// Write a function that combines two lists by alternatingly taking elements.
// For example: given the two lists [a, b, c] and [1, 2, 3], the function
// should return [a, 1, b, 2, c, 3].
function interleave(list1, list2) {
  var until = Math.min(list1.length, list2.length);
  var accum = new Array(until * 2);

  for (var i = 0; i < until; i++) {
    accum[i * 2] = list1[i];
    accum[i * 2 + 1] = list2[i];
  }

  return accum;
}

// Write a function that computes the list of the first 100 Fibonacci numbers.
// By definition, the first two numbers in the Fibonacci sequence are 0 and 1,
// and each subsequent number is the sum of the previous two. As an example,
// here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and
// 34.
function fib100() {
  var fibs = new Array(100);
  fibs[0] = 0;
  fibs[1] = 1;

  for (var i = 2; i < 100; i++) {
    fibs[i] = fibs[i - 2] + fibs[i - 1];
  }

  return fibs;
}

// Write a function that given a list of non negative integers, arranges them
// such that they form the largest possible number. For example, given [50, 2,
// 1, 9], the largest formed number is 95021.
function largestNumList(nums) {
  return nums.sort(function(a, b) {
    return msdNormalize(b) - msdNormalize(a);
  });
}

// Move the decimal point of num so that the most significant digit is to the
// left of the  decimal point, and all others are to the right. E.g. 1234, 567
// to 1.234, 5.67, etc.
function msdNormalize(num) {
  while (num >= 10) {
    num /= 10;
  }

  return num;
}

// Write a program that outputs all possibilities to put + or - or nothing
// between the numbers 1, 2, ..., 9 (in this order) such that the result is
// always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
function sumDif100(list) {
  var initial = forSum(list);
}
