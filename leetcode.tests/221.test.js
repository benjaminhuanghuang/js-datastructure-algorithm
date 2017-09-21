const { assert } = require("chai");
const maximalSquare = require("../leetcode/221.MaximalSquare");

describe("221. Maximal Square: ", () => {
  it(`return 4 from ["10100","10111","11111","10010"]`, () => {
    const res = maximalSquare(["10100", "10111", "11111", "10010"]);
    assert.equal(res, 4)
  });

  it(`return 4 from ["11","11"]`, () => {
    const res = maximalSquare(["11", "11"]);
    assert.equal(res, 4)
  });
});