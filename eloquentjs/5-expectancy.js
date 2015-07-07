function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var agesByCent = {}; // Map list of ages to century of death
ancestry.forEach(function (person) {
  var age = person.died - person.born;
  var century = Math.ceil(person.died / 100);
  if (agesByCent[century] == undefined) {
    agesByCent[century] = [age];
  } else {
    agesByCent[century].push(age);
  }
});

var avgAgesByCent = {};
for (var cent in agesByCent) {
  avgAgesByCent[cent] = average(agesByCent[cent]);
}
console.log(avgAgesByCent);

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
