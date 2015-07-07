function range(start, end, index) {
    // console.log(arguments);
    // console.log(index);
    if (index == undefined)
        index = 1;
    var goForward = end > start;
    var result = [];
    for (i = start; goForward ? i <= end : i >= end; i += index) {
        result.push(i);
    }
    return result;
}

function sum(arr) {
    var result = 0;
    for (var elem in arr) {
        result += arr[elem];
    }
    return result;
}

// console.log(range(1, 10));
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
