/*
  450. Delete Node in a BST
*/

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root == null) return root;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    // root.val === key
    if (root.left != null && root.right != null) {
      // find minNode in the right sub tree
      let minNode = root.right;
      while (minNode.left != null) {
        minNode = minNode.left;
      }
      root.val = minNode.val;
      // delete the minNode
      root.right = deleteNode(root.right, minNode.val);
    } else {
      let new_root = root.left == nullptr ? root.right : root.left;
      return new_root;
    }
  }
  return root;
};
