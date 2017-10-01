/*
 If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.

 */

 /*
  Solution: the root node has the minimum value
  记录比根节点大的所有节点中值最小的元素
 */

var findSecondMinimumValue = function(root) {
  if(root == null )
    return -1;

  this.ans = Number.MAX_SAFE_INTEGER;
  this.min = root.val;
  this.traverse(root);

  return ans == Number.MAX_SAFE_INTEGER ? -1: ans;

  this.traverse= function(root)
  {
    if (root == null)
      return;
    if (this.ans > root.val && root.val > min)
      this.ans = root.val;
    this.traverse(root.left);
    this.traverse(root.right);
  }
};