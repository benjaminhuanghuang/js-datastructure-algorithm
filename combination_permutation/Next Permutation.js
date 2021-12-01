/*
31. Next Permutation

https://leetcode.com/problems/next-permutation/
*/

/*
Solution: 
Find the last acceding element x: find nums[i] < nums[i+1]
swap with the smallest number y, y is after x and y is greater than x.
Reverse the elements after x.
Sample:
1 2 7 4 3 1
  ^
1 2 7 4 3 1
        ^
1 3 7 4 2 1
  ^      ^
1 3 1 2 4 7
    ^ ^ ^ ^

Time complexity: O(n)
Space complexity: O(1)

从后往前找，直到 nums[i] < nums[i + 1]
找到 i 后，从后往前找，直到 nums[j] > nums[i]，交换 nums[i]、nums[j]，然后把 i 后的倒置一下
没找到 i 的话，直接倒置一下
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
 
  const swap = function (arr, from, to) {
    var tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
  };

  const reverse = function (arr, start, end) {
    while (start < end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  };

  let i = nums.length - 2;
  // 从后向前，找到从递减到递增的转折点
  while (i >= 0 && nums[i + 1] <= nums[i]) --i;


  if (i >= 0) {
    let j = nums.length - 1;
    //从后向前，找 nums[j] > nums[i]swap with the smallest number y, y is after x and y is greater than x.
    while (j >= 0 && nums[j] <= nums[i]) --j;
    swap(nums, i, j);
    reverse(nums, i + 1, nums.length - 1);
  }
  else{
    reverse(nums, 0, nums.length - 1);
  }
};
