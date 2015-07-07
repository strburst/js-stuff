function deepEqual(a, b) {
    if (a == null || b == null || typeof a !== 'object' || typeof b !==
            'object') {
        return false;
    }
    if (a == b) { // Reference equality
        return true;
    }

    for (var property in a) {
        if (a[property] !== b[property]) {
            if (typeof a[property] === 'object') {
                return deepEqual(a[property], b[property]);
            } else {
                return false;
            }
        }
    }
    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
