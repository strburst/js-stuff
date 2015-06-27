// This is the old skipSpace. Modify it...
function skipSpace(string) {
  var bolComment = /^#[^]*\n/;
  if (bolComment.test(string))
    return skipSpace(string.replace(bolComment, ""));

  string = string.replace(/ *#[^\n]*\n/g, "\n");
  var first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}
console.log(skipSpace("#introcomment\na # one\n   # two\n()"));
console.log(skipSpace("a # one\n   # two\n()"));
console.log(parse("a\n\n()"));
console.log(parse("#introcomment\na # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}// This is the old skipSpace. Modify it...
