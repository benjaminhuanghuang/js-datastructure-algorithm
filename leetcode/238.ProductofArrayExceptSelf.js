/*
  Solve it without division and in O(n).
*/

/*
  Solution  res[i] = (product of 0 to i -1) * (product of i + 1 to len -1) 
*/
var productExceptSelf = function(nums) {
  if (nums == null || nums.length == 0) return 0;

  let res = [...nums];   // don't modify nums here
  for (let i = nums.length - 2; i >= 0; i--) 
    res[i] = res[i + 1] * nums[i];

  for (let i = 1; i < nums.length; i++) 
    nums[i] = nums[i - 1] * nums[i];
  
  for (let i = 0; i < nums.length; i++) {
    let productLeft = (i == 0) ? 1 : nums[i - 1];
    let productRight = (i == nums.length - 1) ? 1 : res[i + 1];
    res[i] = productLeft * productRight ;
  }
  return res;
};

let res = productExceptSelf([1, 2, 3, 4]);
// let res = productExceptSelf([9,0,2]);
console.log(res);