function TreeNode(val)
{
  this.val = val;
  this.left = this.right = null;
}

var rob = function(root)
{
  if(root == null)
    return 0;
  if (root.left == null && root.right == null)
    return root.val;
  
  // case 1: rob the root
  let leftMax =0;
  let rightMax =0;
  if(root.left !== null)
    leftMax = rob(root.left.left) + rob(root.left.right)
  if(root.right !== null)
    rightMax = rob(root.right.left) + rob(root.right.right)
  let max = root.val + leftMax + rightMax;

  // case 2: not rob the root
  leftMax = rob(root.left);
  rightMax = rob(root.right);
  let max2 = leftMax + rightMax;
  return Math.max(max, max2);
}