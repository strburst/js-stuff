function arrayToList(arr) {
    if (arr.length > 1) {
        return {
            value: arr.shift(),
            rest: arrayToList(arr)
        };
    } else {
        return {
            value: arr.shift(),
            rest: null
        };
    }
}

function listToArray(list) {
    var result = [];
    result.push(list.value);
    if (list.rest !== null) {
        return result.concat(listToArray(list.rest));
    } else {
        return result;
    }
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    };
}

function nth(list, counter) {
    if (counter != 0) {
        return nth(list.rest, counter - 1);
    } else {
        return list.value;
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
