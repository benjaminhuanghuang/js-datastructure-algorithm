/*
515. Find Largest Value in Each Tree Row

https://leetcode.com/problems/find-largest-value-in-each-tree-row/
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
 * @return {number[]}
 */
var largestValues = function (root) {
  const ans = [];

  const inorder = (root, row) => {
    if (root == null) return;
    while (ans.length <= row) ans.push(Number.MIN_SAFE_INTEGER);

    inorder(root.left, row + 1);
    ans[row] = Math.max(ans[row], root.val);
    inorder(root.right, row + 1);
  };
  // main
  inorder(root, 0);
  return ans;
};
