var assert = require('assert');
var { fibonacci, fibonacci_dp} = require('../fibonacci');

describe('fibonacci: ', () => {
  it('return 1 at position 1', () => {
    const position = 1;
    const res = fibonacci(position);
    assert.equal(res, 1);
  });

  it('return 3 at position 4', () => {
    const position = 4;
    const res = fibonacci(position);
    assert.equal(res, 3);
  });

  it('return 34 at position 9', () => {
    const position = 9;
    const res = fibonacci(position);
    assert.equal(res, 34);
  });

  it('execution time when position 50', () => {
    const position = 40;
    const now = Date.now();
    const res = fibonacci(position);
    assert.equal(res, 102334155);
    console.log(Date.now() - now);
  });
});

describe('fibonacci_dp: ', () => {
  it('return 1 at position 1', () => {
    const position = 1;
    const res = fibonacci_dp(position);
    assert.equal(res, 1);
  });

  it('return 3 at position 4', () => {
    const position = 4;
    const res = fibonacci_dp(position);
    assert.equal(res, 3);
  });

  it('return 34 at position 9', () => {
    const position = 9;
    const res = fibonacci_dp(position);
    assert.equal(res, 34);
  });

  it('execution time when position 40', () => {
    const position = 40;
    const now = Date.now();
    const res = fibonacci_dp(position);
    assert.equal(res, 102334155);
    console.log(Date.now() - now);
  });
});