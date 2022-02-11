/*
  give a perfect binary tree

  [Uber]
*/

function CounterClockwizeTreeTraversal(tree) {
  const res = [];

  res.push(tree.val);

  traverseLeft(tree.left, res);
  traverseLeaves(tree, res);
  traverseRight(tree.right, res);
}
function traverseLeft(curr, res) {
  if (!curr.left) {
    return;
  }
  res.push(curr.val);
  traverseLeft(curr.left, res);
}

function traverseRight(curr, res) {
  if (!curr.right) {
    return res;
  }
  traverseRight(curr.right, res);
  res.push(curr.val);
}

function traverseLeaves(curr, res) {
  if (!curr.left) {
    return;
  }
  traverseLeaves(curr.left, res);
  traverseLeaves(curr.right, res);
}
