const { assert } = require("chai");
const uniquePathsWithObstacles = require("../leetcode/063.UniquePathsII");

describe.only("63. Unique Paths II: ", () => {
  it(`return 1 from [[0,0]]`, () => {
      const res =  uniquePathsWithObstacles([[0,0]]);
      assert.equal(res, 1);
  });
});