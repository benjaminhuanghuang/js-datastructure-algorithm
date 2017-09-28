function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

var isValidBST = function(root) {
  return validBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function validBST(root, min, max)
{
  if (root == null)
    return true;
  return root.val > min && root.val < max 
        && validBST(root.left, min, root.val) 
        && validBST(root.right, root.val, max);     
}

// Solution 2
let pervious = Number.MIN_SAFE_INTEGER;

var isValidBST_2 = function(root) {
  if(root == null)
    return true;
  if(!isValidBST_2(root.left))
    return false;
  if (pervious >root.val)
    return false;
  pervious = root.val;
  return this.isValidBST_2(root.right);
};


