function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let treeNodes = [];

var convertBST = function(root) {
  if (root == null || (root.left == null && root.right == null)) return root;
  goThroughTree(root);

  let sumOfGreater = treeNodes[treeNodes.length-1].val;
  for(let i = treeNodes.length -2; i>=0; i--)
  {
    let val = treeNodes[i].val;
    treeNodes[i].val += sumOfGreater;
    sumOfGreater += val;
  }
  return root;
};

function goThroughTree(root)
{
  if(root)
  {
    goThroughTree(root.left);
    treeNodes.push(root);
    goThroughTree(root.right);
  }
}
