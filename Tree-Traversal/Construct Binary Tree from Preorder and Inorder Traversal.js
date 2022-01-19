/*
105. Construct Binary Tree from Preorder and Inorder Traversal

Medium

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

*/

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if(! preorder || !inorder) return null;  
  if(preorder.length ==0 || inorder.length===0) return null;  

   const rootVal = preorder[0];
   const root = new TreeNode(rootVal);

   const indexOfRootInInOrder = inorder.indexOf(rootVal);

   root.left = buildTree(preorder.slice(1, 1 + indexOfRootInInOrder), inorder.slice(0, indexOfRootInInOrder));

   root.right = buildTree(preorder.slice(1 + indexOfRootInInOrder), inorder.slice(indexOfRootInInOrder+1, inorder.length));
   return root;
};