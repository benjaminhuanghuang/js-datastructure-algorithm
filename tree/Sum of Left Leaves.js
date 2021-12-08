/*

404. Sum of Left Leaves

*/
var sumOfLeftLeaves = function(root) {
  let sum =0;
  let helper = function(root)
  {
    if(root == null)
      return;
    if(root.left)
    {
      if(root.left.left == null && root.left.right==null)  // is leaf
        sum+=root.left.val;
      else
      {
        helper(root.left);
      }
    }
    if(root.right)
    {
      helper(root.right);
    }
  }
  helper(root);
  return sum;
}
// let root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

let res = sumOfLeftLeaves(root);

console.log(res);

/* Wrong!
Can not determine left leaves in layer
*/
var sumOfLeftLeaves_wrong = function(root) {
  if(root == null)
    return 0;
  
  let layer=[];
  if(root.left)
    layer.push(root.left);
  if(root.right)
    layer.push(root.right);
  
  let sum = 0;
  while(layer.length > 0)
  {
    let nextLayer=[];
    for(let i =0 ; i< layer.length; i++)
    {
      if(i ==0 && layer[i].left==null &&  layer[i].right==null)
        sum += layer[i].val;
      if(layer[i].left)
        nextLayer.push(layer[i].left);
      if(layer[i].right)
        nextLayer.push(layer[i].right);
    }
    layer = nextLayer;
  }
  return sum;
};