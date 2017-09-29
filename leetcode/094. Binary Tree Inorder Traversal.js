function TreeNode(val)
{
  this.val = val;
  this.left = this.right = null;
}

var inorderTraversal = function(root) {
  let res =[];
  if (root == null)
    return res;
  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));
  return res;
};
