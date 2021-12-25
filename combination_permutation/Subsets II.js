
/*

90. Subsets II

https://leetcode.com/problems/subsets-ii/

array nums that may contain duplicates,
*/

/*
  基于Subset , sort the array
  remove duplicated in the for loop
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  nums.sort((a, b)=> a-b);
  const res = [];
  
  const helper = (length, start, curr) => {
    if (curr.length == length) {
      res.push([...curr]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      //  remove duplicated!
      if(i > start && nums[i] == nums[i-1])
        continue;
      curr.push(nums[i]);
      helper(length, i + 1, curr);  // NOT start + 1
      curr.pop();
    }
  };

  // 根据长度取 subset
  for (let len = 0; len <= nums.length; len++) {
    helper(len, 0, []);
  }
  return res;
};