/*
530. Minimum Absolute Difference in BST

*/

var getMinimumDifference = function(root) {
  if (root == null)
    return 0;
  
  let minDiff = Math.min(root.val - root.left.val, root.right.val - root.val )
};