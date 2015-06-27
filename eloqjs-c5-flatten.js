function flatten(arrs) {
    return arrs.reduce(function(a, b) {
        return a.concat(b);
    }); //Starts with an empty list
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
