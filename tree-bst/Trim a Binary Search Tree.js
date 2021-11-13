/*

  669. Trim a Binary Search Tree

*/



/*
当root的值位于L和R之间，则递归修剪其左右子树，返回root。
当root的值小于L，则其左子树的值都小于L，抛弃左子树，返回修剪过的右子树。
当root的值大于R，则其右子树的值都大于R，抛弃右子树，返回修剪过的左子树。
*/

function TreeNode(val)
{
  this.val = val;
  this.left = this.right = null;
}

var trimBST = function(root, L, R) {
  if (root == null)
    return null;
  
  if(root.val < L)
  {
    return  trimBST(root.right, L, R);
  }
  if(root.val >= R)
  {
    return trimBST(root.left, L, R);
  }
  root.left = trimBST(root.left, L, root.val);
  root.right = trimBST(root.right, root.val, R);
  return root;
};


// Test
let root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(2);

let res = trimBST(root, 1, 2);

console.log(res);