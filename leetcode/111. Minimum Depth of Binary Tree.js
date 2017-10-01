var minDepth = function(root) {
  if(root == null)
    return 0;
  if (root.left != null && root.right != null)
    return 1  + Math.min(minDepth(root.left), minDepth(root.right));
  else if (root.left != null )
    return minDepth(root.left) + 1;
  else
    return minDepth(root.right) + 1;
};