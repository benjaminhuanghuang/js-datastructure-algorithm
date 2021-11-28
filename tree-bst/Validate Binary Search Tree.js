/*

98. Validate Binary Search Tree

https://leetcode.com/problems/validate-binary-search-tree/

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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  const isBST = (root, min, max) => {
    if (root == null) return true;
    if (root.val <= min || root.val >= max) return false;

    if (!isBST(root.left, min, root.val) || !isBST(root.right, root.val, max)) return false;
    return true;
  };

  return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);  
};