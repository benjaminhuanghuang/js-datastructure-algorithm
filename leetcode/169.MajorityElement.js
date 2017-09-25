/*
  
*/

var majorityElement = function(nums) {
  if (nums == null || nums.length == 0) return;

  let previous = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      previous = nums[i];
    }

    if (nums[i] == previous) {
      count++;
    } else {
      count--;
    }
  }

  return previous;
};
