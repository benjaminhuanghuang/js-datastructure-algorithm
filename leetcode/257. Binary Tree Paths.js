var binaryTreePaths = function(root) {
  let res =[];
  if (root == null)
    return res;
  traverse(root, res, []);
  return res;
};

function traverse(root, res, path)
{
   path.push(root.val);
  if(root.left == null && root.right == null)
  {
    res.push(path.join("->"));
  }
  else
  {
    if (root.left)
        traverse(root.left, res, [...path]);
    if (root.right)
        traverse(root.right, res, [...path]);
  }
}