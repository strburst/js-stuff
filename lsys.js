var algae = {
  a: "ab",
  b: "a"
}

function transform(rule, sequence) {
  return sequence.split("").reduce(function(prev, curr) {
    return prev + rule[curr];
  }, "");
}
