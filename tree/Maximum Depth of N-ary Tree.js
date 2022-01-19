/*
559. Maximum Depth of N-ary Tree

Easy

https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) return 0;
  const depth = root.children.map((ch) => maxDepth(ch));
  return 1 + (depth.length == 0 ? 0 : Math.max(...depth));
};
