/*
506. Relative Ranks
*/

var findRelativeRanks = function(nums) {
  let pair = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    pair[i] = [nums[i], i];
  }

  pair.sort((a, b) => b[0] - a[0]);   // Pay attention to the order

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      result[pair[i][1]] = "Gold Medal";
    } else if (i == 1) {
      result[pair[i][1]] = "Silver Medal";
    } else if (i == 2) {
      result[pair[i][1]] = "Bronze Medal";
    } else {
      result[pair[i][1]] = i + 1 + "";
    }
  }

  return result;
};
