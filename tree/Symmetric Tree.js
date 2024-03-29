/*
  101. Symmetric Tree
  
  Easy

  https://leetcode.com/problems/symmetric-tree/
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
  Symmetric 
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  const isMirror = (node1, node2) => {
    if (node1 == null && node2 == null) return true;
    if (node1 == null || node2 == null) return false;

    return node1.val == node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
  };

  return isMirror(root.left, root.right);
};
