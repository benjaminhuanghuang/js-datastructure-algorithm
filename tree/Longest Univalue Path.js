/*

687. Longest Univalue Path

Medium

https://leetcode.com/problems/longest-univalue-path/

! This path may or may not pass through the root.
*/
/*
  This path may or may not pass through the root.
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  if (root == null) return 0;
  let longestPath = 0;

  // return the longer path of the left sub node and right sub node of current node
  const univaluePath = (root) => {
    if (root == null) return 0;
    const l = univaluePath(root.left);
    const r = univaluePath(root.right);
    let pl = 0;
    let pr = 0;
    if (root.left && root.val == root.left.val) pl = l + 1;
    if (root.right && root.val == root.right.val) pr = r + 1;
    longestPath = Math.max(longestPath, pl + pr);
    return max(pl, pr);
  };
  univaluePath(root);
  return ans;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
