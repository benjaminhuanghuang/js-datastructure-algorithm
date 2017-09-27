var permute = function(nums) {
  let res = [];
  if (nums == null || nums.length == 0) return res;
  combinationHelper(nums, [], res);
  return res;
};

function combinationHelper(nums, combination, res) {
  if (nums.length <= 0) {
    res.push(combination);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    let restNums = [...nums];
    restNums.splice(i, 1);
    let newCombination = [...combination, nums[i]];
    combinationHelper(restNums, newCombination, res);
  }
}

let res = permute([1, 2, 3]);
console.log(res);
