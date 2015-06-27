function* genConstr() {
  for (var i = 0; i < 5; i++) {
    yield i;
  }
}

var gen = genConstr();
console.log(gen.next());
