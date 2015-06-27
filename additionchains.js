// Addition chains: https://www.reddit.com/r/dailyprogrammer/comments/2y5ziw/
// 20150306_challenge_204_hard_addition_chains/
// Test cases:
// 7 43
// 9 95
// 10 127
// 13 743
// 19 123456
// 25 1234567
// Notes:
// Exploring the tree in any order is the same as exploring in increasing order
function generate(numNumbers, goal) {
  var startTime = (new Date()).getTime();

  var begin = [1, 2];
  var result = explore(goal - sum(begin), begin, numNumbers - 1);

  var endTime = (new Date()).getTime();
  console.log(endTime - startTime);

  return result;
}

/**
 * Given the numbers in accum, attempt to construct an addition chain that
 * reaches to the specified sum with the specified number of numbers added.
 * Alternatively, explore the branch specified by accum.
 */
function explore(sumLeft, accum, numsLeft) {
  if ((sumLeft <= 0 && numsLeft != 0)
      || (numsLeft <= 0 && sumLeft != 0)
      || (maxTreeSum(accum[accum.length - 1], numsLeft) < sumLeft)) {
    // Overshot/undershot target
    return null;
  }
  if (sumLeft == 0 && numsLeft == 0) {
    return accum;
  }

  for (var i = 0; i < accum.length; i++) { // Non-greedy, slower
  // for (var i = accum.length - 1; i >= 0; i--) { // Greedy, start from end
    var next = accum[i] + accum[accum.length - 1];
    accum.push(next);

    var result = explore(sumLeft - next, accum, numsLeft - 1);
    if (result !== null) {
      return result;
    }
    accum.pop();
  }

  return null; // Solution not found in this branch
}

/**
 * Returns the maximum sum producable by this branch.
 */
function maxTreeSum(high, n) {
  var result = 0;
  for (var i = 0; i < n; i++) {
    high += high;
    result += high;
  }
  return result;
}

function sum(list) {
  return list.reduce(function(prev, value) {
    return prev + value;
  });
}
