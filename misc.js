/**
 * Create a new object that maps all the distinct values of the given key in
 * objects to a list of objects that have that value for key. If purge is
 * truthy, also remove the given key from all objects.
 */
exports.distinctMap = function(key, objects, purge) {
  return objects.reduce(function(map, object) {
    var value = object[key];
    if (!map[value]) {
      // This is the first item with this value
      map[value] = [object];
    } else {
      map[value].push(object);
    }

    if (purge) {
      delete object[key];
    }

    return map;
  }, {});
};
