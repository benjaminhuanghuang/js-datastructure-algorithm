/*
285. Inorder Successor in BST

Medium

https://leetcode.com/problems/inorder-successor-in-bst/
*/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  //successor must be larger then the node itself, so:
  //if p is in root.left, root can be the successor, null cannot be
  //if p is in root.right, root can not be the successor, null can be
  if (root == null) return null;

  if (root.val <= p.val) {
    return inorderSuccessor(root.right, p);
  } else {
    const leftRes = inorderSuccessor(root.left, p);
    if (leftRes == null) return root;
    return leftRes;
  }
};
