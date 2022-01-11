/*
  114. Flatten Binary Tree to Linked List

  https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
*/

/*
  https://www.youtube.com/watch?v=NHdrzNpt1ZI

  1. set right sub tree to the leaf of left tree
  2. set left sub tree to right
  3. set left = null
*/

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(!root) return root;
   
    flatten(root.left);
    flatten(root.right);

    if(root.left == null)
    {
      return;
    }
    // 把左子树压平
    let node = root.left;
    while(node.right){
      node = node.right;
    }
    // 把右子树接上去
    node.right = root.right;
    root.right = root.left;
    root.left = null;
};