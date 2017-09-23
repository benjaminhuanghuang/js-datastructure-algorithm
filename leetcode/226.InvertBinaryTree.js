function TreeNode(val)
{
  this.val = val;
  this.left = this.right = null;
}

var invertTree = function(root) {
  if (root == null)
    return root;
  
  let right = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(right);
  return right;
};