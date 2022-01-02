/*
102. Binary Tree Level Order Traversal

https://leetcode.com/problems/binary-tree-level-order-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];

  const ans = [];

  const queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    const level = [];
    while (size--) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(level);
  }
  return ans;
};
