var assert = require('assert');
var binarySearch = require('../binary_search');

describe('binary search: ', () => {
  it('convert a to b when num is 1', () => {
    const nums = [1,2,3];
    const key = 1;
    const res = binarySearch(nums, key);
    assert.equal(res, true);
  });
});