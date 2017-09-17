const { assert } = require("chai");
const { minimumTotal, minimumTotal2, minimumTotal3 } = require("../leetcode/332.ReconstructItinerary");

describe.only("332. Reconstruct Itinerary: ", () => {
  it(`return 11 from [[2],
                      [3,4],
                      [6,5,7],
                      [4,1,8,3]]`, () => {
    const nums = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    const res = minimumTotal3(nums);
    assert.equal(res, 11);
  });
});