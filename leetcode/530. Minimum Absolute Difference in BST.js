/*
530. Minimum Absolute Difference in BST
Note: There are at least two nodes in this BST.
*/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var getMinimumDifference = function (root) {
  let state = {
    last: Number.MIN_SAFE_INTEGER,
    ans: Number.MAX_SAFE_INTEGER
  }

  inorderIterator(root, state);
  return state.ans;
};

function inorderIterator(root, state) {
  if (root == null)
    return;
  inorderIterator(root.left, state);
  state.ans = Math.min(state.ans, root.val - state.last);
  state.last = root.val;
  inorderIterator(root.right, state);
}

let root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);

let res = getMinimumDifference(root);
console.log(res);