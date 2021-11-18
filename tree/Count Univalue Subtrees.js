/*

  250 - Count Univalue Subtrees 

  https://leetcode.com/problems/count-univalue-subtrees/

  Uni-value subtree means all nodes have the same value
*/
let res = 0;

function countUnivalSubtrees(root) {
  if (root == null)
      return res;

  const isUnival = (root, val) => {
    if (root == null)
      return true;
    return root.val == val && isUnival(root.left, val) && isUnival(root.right, val);
  }

  if (isUnival(root, root.val))
      ++res;
  countUnivalSubtrees(root.left);
  countUnivalSubtrees(root.right);
  return res;
}