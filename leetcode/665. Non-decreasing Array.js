/*
Given an array with n integers, your task is to check if it could become non-decreasing by 
modifying at most 1 element.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
*/

var checkPossibility = function(nums) {
  if(nums == null || nums.length == 0)
    return false;

  let found = false;
  for(let i =1 ; i< nums.length; i++)
  {
    if(nums[i] < nums[i-1])   // find deceasing
    {
      if(found)
        return false;
      else{
        // when nums[i-2]<nums[i-1]>nums[i], if nums[i] < nums[i-2], like 4, 5, 3, change it to 4,5,5
        // if nums[i] > nums[i-2], like 5, 6, 3 , change to 5,5,3
        if(i > 1 && nums[i] < nums[i-2])
          nums[i] = nums[i-1];
        found = true;
      }
    }
  }
  return true;
};

// let input = [3,4,2,3];  // false  
let input = [4,2,3];  // true
let res = checkPossibility(input);
console.log(res);