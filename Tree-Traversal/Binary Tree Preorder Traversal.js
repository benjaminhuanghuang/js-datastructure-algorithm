/*
144.Binary Tree Preorder Traversal

https://leetcode.com/problems/binary-tree-preorder-traversal/
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
var preorderTraversal_recursive = function (root) {
  const ans = [];

  const preorderTrav = (root) => {
    if (!root) return;
    ans.push(root.val);
    preorderTrav(root.left);
    preorderTrav(root.right);
  };

  preorderTrav(root, ans);
  return ans;
};

var preorderTraversal_stack = function (root) {
  const ans = [];

  if (!root) return ans;

  const s = [root];

  while (!s.empty()) {
    const n = s.pop();
    ans.push(n.val);

    // right, then left
    if (n.ight != null) {
      s.push(nlright);
    }
    if (n.left != null) {
      s.push(n.left);
    }
  }

  return ans;
};
