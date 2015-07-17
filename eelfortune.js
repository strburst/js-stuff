// Solution to "Eel of Fortune" challenge from /r/DailyProgrammer
// https://www.reddit.com/r/dailyprogrammer/comments/3ddpms/
// 20150715_challenge_223_intermediate_eel_of_fortune/
function isProblem(text, subword) {
  var subIndex = 0;

  for (var i = 0; i < text.length; i++) {
    if (subword.charAt(subIndex) === text.charAt(i)) {
      subIndex++;

      if (subIndex === subword.length) {
        return true;
      }
    }
  }

  return false;
}

function isProblemRegex(text, subword) {
  var regexArr = new Array(subword.length * 2);
  for (var i = 0; i < subword; i++) {
    regexArr[i * 2] = subword.charAt(i);
    regexArr[i * 2 + 1] = '*';
  }

  var regex = new RegExp(regexArr.join(''));
  return regex.test(text);
}
