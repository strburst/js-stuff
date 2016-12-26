
function foo_constructor1(spec, to_augment) {
  var aug = to_augment || Object.create(null);

  aug.bar = spec.bar;
  aug.baz = spec.baz;

  return aug;
}

function foo_constructor2(spec) {
  var constructed = Object.create(null);

  constructed.say_something = function() {
    return spec.name + ' says "' + spec.says + '"';
  };

  constructed.get_name = function() {
    return spec.name;
  };

  return constructed;
}
