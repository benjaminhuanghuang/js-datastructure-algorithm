/*
189. Rotate Array

Medium

https://leetcode.com/problems/rotate-array/

Given an array, rotate the array to the right by k steps, where k is non-negative.


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const rotateBetween = (nums, l, r)=>{
       while(l < r){
        const temp = nums[r];
        nums[r] = nums[l];
        nums[l] = temp;
        l++;
        r--;
       } 
    }
    const n = nums.length;
    const steps= k % n;
    rotateBetween(nums, 0, n -1);
    
    rotateBetween(nums, 0, steps -1);
    rotateBetween(nums, steps, n-1);

};