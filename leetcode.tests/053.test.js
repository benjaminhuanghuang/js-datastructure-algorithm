const { assert } = require("chai");
const maxSubArray = require("../leetcode/053.MaximunSubarray");

describe("053. Maximum Subarray: ", () => {
  it("return 6 from [-2,1,-3,4,-1,2,1,-5,4]", () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4];
    const res = maxSubArray(nums);
    assert.equal(res, 6);
  });

  it("return 0 from []", () => {
    const nums = [];
    const res = maxSubArray(nums);
    assert.equal(res, 0);
  });

  it("return 0 from null", () => {
    const nums = null;
    const res = maxSubArray(nums);
    assert.equal(res, 0);
  });

  it("return 0 from undefined", () => {
    const res = maxSubArray();
    assert.equal(res, 0);
  });
});

