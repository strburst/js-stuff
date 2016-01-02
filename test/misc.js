var assert = require('assert');

var misc = require('../misc.js');

describe('miscellaneous utilities', function() {
  describe('bitPacker', function() {
    it('should pack single-bit fields properly', function() {
      var pack = bitutil.bitPacker([
          { name: 'a', start: 1, end: 1 },
          { name: 'b', start: 3, end: 3 },
          { name: 'c', start: 4, end: 4 },
          { name: 'd', start: 7, end: 7 },
      ], parseInt('01100101', 2));

      assert.equal(pack({ a: 1, b: 1, c: 1, d: 1 }), 0xFF);
      assert.equal(pack({ a: 0, b: 0, c: 1, d: 1 }), 0xF5);
      assert.equal(pack({ a: 0, b: 0, c: 0, d: 0 }), 0x65);
    });

    it('should pack beginning/ending ranges properly', function() {
      var pack = bitutil.bitPacker([
          { name: 'a', start: 0, end: 4 },
          { name: 'b', start: 8, end: 12 },
      ], 0x0F0);

      assert.equal(pack({a: 0xF, b: 0xF}), 0xFFF);
      assert.equal(pack({a: 0x9, b: 0x9}), 0x9F9);
      assert.equal(pack({a: 0x0, b: 0x0}), 0x0F0);
    });

    it('should return initial if fields is empty', function() {
      assert.equal(bitutil.bitPacker([], 0xDEADBEEF)({}), 0xDEADBEEF);
    });
  });

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

    it('should sort items by a function', function() {
      assert.deepEqual(misc.distinctMap(function(order) {
        return order.item + ' ' + order.type;
      }, [
        { name: 'Alice', item: 'cookies', type: 'with sauce', quantity: 12 },
        { name: 'Bob', item: 'muffins', type: 'with butter', quantity: 5 },
        { name: 'Carol', item: 'muffins', type: 'with sauce',  quantity: 7 },
        { name: 'Dave', item: 'muffins', type: 'with butter', quantity: 6 },
      ]), {
        'cookies with sauce': [
          { name: 'Alice', item: 'cookies', type: 'with sauce', quantity: 12 },
        ],
        'muffins with butter': [
          { name: 'Bob', item: 'muffins', type: 'with butter', quantity: 5 },
          { name: 'Dave', item: 'muffins', type: 'with butter', quantity: 6 },
        ],
        'muffins with sauce': [
          { name: 'Carol', item: 'muffins', type: 'with sauce',  quantity: 7 },
        ],
      });
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
