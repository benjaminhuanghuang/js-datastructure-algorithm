function TreeNode(val)
{
  this.val = val;
  this.left = this.right = null;
}
var isSymmetric = function(root) {
  if (root == null) return false;
  return isSymmetirTree(root.left, root.right);
};

function isSymmetirTree(n1, n2)
{
  if(n1== null && n2==null)
    return true;
  if(n1==null || n2== null)
    return false;

  if (n1.val == n2.val)
    return isSymmetirTree(n1.left, n2.right) && isSymmetirTree(n1.right, n2.left);

  return false;
}
