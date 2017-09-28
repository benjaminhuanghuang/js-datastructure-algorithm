function TreeNode(val)
{
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  if(nums == null || nums.length == 0)
    return null;
  let root = buildTree(nums, 0, nums.length -1);
  return root;
};

function buildTree(nums, left, right)
{
  if(left > right)   // no >= for case of single node 
    return null;
  let mid = left + Math.floor((right - left) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = buildTree( nums, left, mid-1);
  root.right = buildTree( nums, mid + 1, right);
  return root;
}

console.log(3/2);