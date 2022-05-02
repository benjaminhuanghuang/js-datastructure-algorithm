/*
136. Single Number

https://leetcode.com/problems/single-number/


Easy
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((res, num) => res ^ num);
};
