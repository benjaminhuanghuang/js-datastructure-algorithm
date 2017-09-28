var missingNumber = function(nums) {
  if (nums == null || nums.length == 0) return -1;
  let sum = nums.reduce((a, b) => a + b, 0);
  return (nums.length + 1) * (0 + nums.length) / 2 - sum;
};
console.log(missingNumber([0]));
