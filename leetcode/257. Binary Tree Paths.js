var binaryTreePaths = function(root) {
  let res =[];
  if (root == null)
    return res;
  traverse(root, res, []);
  return res;
};

function traverse(root, res, path)
{
  if(root == null)
  {
    res.push(path.join("->"));
  }
  else
  {
    traverse(root.left, res, path.push(root.val));
    traverse(root.right, res, path.push(root.val));
  }
}