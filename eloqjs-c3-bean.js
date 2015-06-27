function countChar(str, char) {
    var result = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) result++;
    }
    return result;
}

function countBs(str) {
    return countChar(str, 'B');
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
