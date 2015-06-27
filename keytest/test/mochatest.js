var assert = require('assert');

describe('Thing', function() {
  describe('Subthing', function() {
    before('hmm before', function() {
      console.log('look I did this before all the tests');
    });

    it('should do the thing correctly', function() {
      assert.equal(1, 1);
    });
    it('should do the thing incorrectly', function() {
      assert.equal(0, 1);
    });

    after('hmm after', function() {
      console.log('look I did this after all the tests');
    });
  });
});
