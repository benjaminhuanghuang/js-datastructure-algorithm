/*
  1008. Construct Binary Search Tree from Preorder Traversal

  Medium

  https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  return bulidBST(preorder, 0, preorder.length - 1);
};

var bulidBST = function (preorder, i, j) {
  if (i > j) return null;
  const root = new TreeNode(preorder[i]);

  let pivot = i + 1;
  while (preorder[pivot] < preorder[i] && pivot <= j) {
    pivot++;
  }

  root.left = bulidBST(preorder, i + 1, pivot - 1);
  root.right = bulidBST(preorder, pivot, j);
  return root;
};
