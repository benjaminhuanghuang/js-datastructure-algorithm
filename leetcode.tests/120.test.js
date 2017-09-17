const { assert } = require("chai");
const { minimumTotal, minimumTotal2, minimumTotal3 } = require("../leetcode/120.Triangle");

describe.only("120. Triangle: ", () => {
  it(`return 11 from [[2],
                      [3,4],
                      [6,5,7],
                      [4,1,8,3]]`, () => {
    const nums = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    const res = minimumTotal3(nums);
    assert.equal(res, 11);
  });

  it("return 0 from []", () => {
    const nums = [];
    const res = minimumTotal(nums);
    assert.equal(res, 0);
  });

  it("return 0 from null", () => {
    const nums = null;
    const res = minimumTotal(nums);
    assert.equal(res, 0);
  });

  it("return 0 from undefined", () => {
    const res = minimumTotal();
    assert.equal(res, 0);
  });
});
