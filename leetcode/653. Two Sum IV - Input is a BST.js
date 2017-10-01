
/*
时间复杂度O(M)，空间复杂度O(M)；M是树中节点个数
*/
var findTarget = function(root, k) {
  let vals = new Set();
  return dfs(root, vals, k);
};

function dfs (root, vals, k)
{
  if(root == null)
    return false;
  if (vals.has(k - root.val))
    return true;
  else
  {
    vals.add(root.val);
    return dfs(root.left, vals, k) || dfs(root.right, vals, k);
  }
}