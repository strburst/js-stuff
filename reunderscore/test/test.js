var assert = require('assert');
var _ = require('../reunderscore.js');

describe("collections", function() {

  describe("map", function() {
    it("shouldn't change the empty list or call iteratee", function() {
      assert.deepEqual(_.map([], function() { assert.fail(); }), []);
    });

    it("should be able to scale numbers by three", function() {
      var actual = _.map([1, 2, 3], function(num) { return num * 3; });
      var expected = [3, 6, 9];
      assert.deepEqual(actual, expected);
    });

    it("should be able to iterate over keys in arbitrary objects", function() {
      var actual = _.map({one: 1, two: 2, three: 3}, function(num, key) {
        return num * 3;
      });
      var expected = [3, 6, 9];
      assert.deepEqual(actual, expected);
    });

    it("should be able to bind a different context object", function() {
      var context = { special: -1 };
      var actual = _.map([1, 2, 3], function(num) {
        return num + this.special;
      }, context);
      var expected = [0, 1, 2];
      assert.deepEqual(actual, expected);
    });

    // _.map([[1, 2], [3, 4]], _.first);
    // => [1, 3]
  });

});

