/*
485. Max Consecutive Ones
*/

var findMaxConsecutiveOnes = function(nums) {
  if (nums == null || nums.length == 0) return 0;
  let length = 0;
  let startIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (startIndex == -1) startIndex = i;
    } else {
      // nums[i] == 0
      if (startIndex != -1) {
        length = Math.max(length, i - startIndex);
        startIndex = -1;
      }
    }
  }
  if(startIndex != -1)
  {
    length = Math.max(length, nums.length - startIndex);
  }
  return length;
};
