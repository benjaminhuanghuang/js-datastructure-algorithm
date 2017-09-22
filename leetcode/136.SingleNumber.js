var singleNumber = function(nums) {
  if (nums == null || nums.length == 0) return -1;
  let xor = 0;
  for (num of nums) {
    xor = xor ^ num;
  }
  return xor;
};
