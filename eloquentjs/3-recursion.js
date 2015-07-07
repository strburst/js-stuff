function isEven(n) {
    return isEvenHelper(Math.abs(n));
}

function isEvenHelper(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    return isEvenHelper(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
