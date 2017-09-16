const { assert } = require("chai");
const findLengthOfLCIS = require("../leetcode/674.LongestContinuousIncreasingSubsequence");

describe("674. Longest Continuous Increasing Subsequence: ", () => {
  it("return 3 from [1,3,5,4,7]", () => {
    const nums = [1, 3, 5, 4, 7];
    const res = findLengthOfLCIS(nums);
    assert.equal(res, 3);
  });

  it("return 1 from [2,2,2,2,2]", () => {
    const nums = [2, 2, 2, 2, 2];
    const res = findLengthOfLCIS(nums);
    assert.equal(res, 1);
  });

  it("return 0 from []", () => {
    const nums = [];
    const res = findLengthOfLCIS(nums);
    assert.equal(res, 0);
  });

  it("return 0 from null", () => {
    const nums = null;
    const res = findLengthOfLCIS(nums);
    assert.equal(res, 0);
  });

  it("return 0 from undefined", () => {
    const res = findLengthOfLCIS();
    assert.equal(res, 0);
  });
});
