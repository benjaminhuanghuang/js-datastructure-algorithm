/*
108. Convert Sorted Array to Binary Search Tree

Easy

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
  关键信息： convert it to a height-balanced binary search tree.
*/
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return sortedArrayToBSTBetween(nums, 0, nums.length - 1);
};

function sortedArrayToBSTBetween(nums, i, j) {
  if (i > j) return null;
  const mid = Math.floor((j - i) / 2) + i;
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBSTBetween(nums, i, mid - 1);
  root.right = sortedArrayToBSTBetween(nums, mid + 1, j);
  return root;
}
