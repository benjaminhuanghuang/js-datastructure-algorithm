/*
594. Longest Harmonious Subsequence
*/

var findLHS = function(nums) {
  nums.sort((a, b) => a - b);
  let longest = 0;
  let left = 0;
  let right = 0;

  while(left <= right && right < nums.length){
    if(nums[right] - nums[left] == 1){
        longest = Math.max(longest, right - left + 1);
        right++;
    } else if(nums[right] - nums[left] < 1){
        right++;
    } else {
        left++;
    }
  }
  return longest;
};

let res = findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
console.log(res);
