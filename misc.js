var _ = require('underscore');

/**
 * Take an array of field objects, with name, start, and end properties
 * (inclusive), and return a function that bitpacks the properties in the
 * object passed as an argument. initial is the bitstring to start from; if not
 * given, it is zero.
 */
var bitPacker = exports.bitPacker = function(fields, initial) {
  return function(values) {
    return fields.reduce(function(acc, field) {
      var rangeLen = field.end - field.start + 1;
      var truncated = values[field.name] & ~(~0 << rangeLen);

      return acc | (truncated << field.start);
    }, initial);
  };
};


/**
 * Create a new object that maps all the distinct values of the given key in
 * objects to a list of objects that have that value for key. If purge is
 * truthy, also remove the given key from all objects.
 *
 * Note that all objects are shallow copied into the new map.
 *
 * If the given key is a function, evaluate the function and use that as the
 * result of the key lookup instead. (purge will be ignored in this case.)
 */
exports.distinctMap = function(fKey, objects, purge) {
  return objects.reduce(function(map, object) {
    if (_.isFunction(fKey)) {
      var value = fKey(object);
    } else {
      var value = object[fKey];
    }

    if (!map[value]) {
      // This is the first item with this value
      map[value] = [object];
    } else {
      map[value].push(object);
    }

    if (purge && !_.isFunction(fKey)) {
      delete object[fKey];
    }

    return map;
  }, {});
};
