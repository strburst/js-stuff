var assert = require('assert');

var misc = require('../misc.js');

describe('miscellaneous utilities', function() {
  describe('distinct set', function() {
    it('should sort items by the correct key', function() {
      assert.deepEqual(misc.distinctMap('item', [
        { name: 'Alice', item: 'cookies', quantity: 12 },
        { name: 'Bob', item: 'muffins', quantity: 5 },
        { name: 'Carol', item: 'muffins', quantity: 7 },
      ]), {
        'cookies': [{ name: 'Alice', item: 'cookies', quantity: 12 }],
        'muffins': [
          { name: 'Bob', item: 'muffins', quantity: 5 },
          { name: 'Carol', item: 'muffins', quantity: 7 },
        ],
      }, 'not purging key');

      assert.deepEqual(misc.distinctMap('item', [
        { name: 'Alice', item: 'cookies', quantity: 12 },
        { name: 'Bob', item: 'muffins', quantity: 5 },
        { name: 'Carol', item: 'muffins', quantity: 7 },
      ], true), {
        'cookies': [{ name: 'Alice', quantity: 12 }],
        'muffins': [
          { name: 'Bob', quantity: 5 },
          { name: 'Carol', quantity: 7 },
        ],
      }, 'purging key');
    });

    it('should work in edge cases', function() {
      assert.deepEqual(misc.distinctMap('foo', []), {}, 'empty object list');
      assert.deepEqual(misc.distinctMap('foo', [], true), {}, 'empty object list');

      assert.deepEqual(misc.distinctMap('foo', [
        { foo: 'hello' },
        { bar: 12 },
        { baz: 15 },
      ]), {
        hello: [{ foo: 'hello' }],
        // undefined is a perfectly valid key. (Interesting...)
        undefined: [
          { bar: 12 },
          { baz: 15 },
        ],
      }, 'undefined values');
    });
  });
});
