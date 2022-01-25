/*
94. Binary Tree Inorder Traversal
https://leetcode.com/problems/binary-tree-inorder-traversal/
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const ans = [];

  const inOrder = (ans, root) => {
    if (root == null) return;
    inOrder(ans, root.left, ans);
    ans.push(root.val);
    inOrder(ans, root.right);
  };

  inOrder(ans, root);
  return ans;
};
