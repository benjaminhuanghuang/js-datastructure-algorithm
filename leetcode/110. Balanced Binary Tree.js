var isBalanced = function(root) {
  if(root == null)
    return true;

  if (isBalanced(root.left) && isBalanced(root.right))
  {
    return Math.abs(depth(root.left) - depth(root.right)) < 2
  }
  return false;
};

function depth(root)
{
  if(root == null)
    return 0;
  return Math.mat(depth(root.left), depth(root.right)) + 1;
}