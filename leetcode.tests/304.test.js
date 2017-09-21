const { assert } = require("chai");
const NumMatrix = require("../leetcode/304.RangeSumQuery2D-Immutable");

describe("304. Range Sum Query 2D - Immutable: ", () => {
  it("return 6 from [-2,1,-3,4,-1,2,1,-5,4]", () => {
    const input = [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5]
    ];
    const matrix = new NumMatrix(input);
    const output = matrix.sumRegion(2, 1, 4, 3);
    assert.equal(output, 8);
  });
});

