/*
941. Valid Mountain Array

Easy

https://leetcode.com/problems/valid-mountain-array/

*/



/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let i = 0;
  let j = arr.length - 1;

  // left to right
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
    i++;
  }
  // right to left
  while (j > 0 && arr[j] < arr[j - 1]) {
    j--;
  }

  return i > 0 && i == j && j < arr.length - 1;
};
