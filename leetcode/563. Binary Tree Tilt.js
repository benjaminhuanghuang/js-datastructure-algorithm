/*
563. Binary Tree Tilt
*/
function TreeNode(val)
{
  this.val = val;
  this.left = this.right = null;
}

var findTilt = function(root) {
  let ans = 0;
  if(root == null)
    return 0;
  
  function iterator(root){
      if (root == null)
        return 0; 
      let leftSum = iterator(root.left);
      let rightSum = iterator(root.right);
      ans += Math.abs(leftSum - rightSum);
      return root.val + leftSum + rightSum;
    }
  iterator(root);
  return ans;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
let res = findTilt(root);
console.log(res);




