function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

var diameterOfBinaryTree = function(root) {
  if (root == null)
    return 0;

  let diameter = Math.max(diameterOfBinaryTree(root.left),
                          diameterOfBinaryTree(root.right),
                          depth(root.left) + depth(root.right));   // Note! diameter is not depth
  return diameter;                
};

function depth(root)
{
  if (root == null)
    return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
}