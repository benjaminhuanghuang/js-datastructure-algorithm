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

  const helper = (ans, root) => {
    if (root == null) return;
    helper(ans, root.left, ans);
    ans.push(root.val);
    helper(ans, root.right);
  };

  helper(ans, root);
  return ans;
};
