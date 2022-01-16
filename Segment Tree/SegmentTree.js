class SegmentTreeNode {
  constructor(start, end, sum, left, right) {
    this.start = start;
    this.end = end;

    this.sum = sum; // cam be max/min

    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// O(N)
function buildTree(start, end, vals) {
  if (start == end) {
    return new SegmentTreeNode(start, end, vals[start]);
  }

  const mid = Math.floor((start + end) / 2);
  const left = buildTree(sart, mid, vals);
  const right = buildTree(mid + 1, end, vals);

  return new SegmentTreeNode(start, end, left.sum + right.sum, left, right);
}

// log(N)
function updateTree(root, index, val) {
  if (root.start ==index && root.end == index) {
    root.sum = val;
    return;
  }
  const mid = Math.floor((root.start + root.end) / 2);
  if (index <= mid) {
    updateTree(root.left, index, val);
  } else {
    updateTree(root.right, index, val);
  }
  root.sum = root.left.sum + root.right.sum;
}
// O(logN)
function querySum(root, i, j) {
  if (root.start == i && root.end == j) {
    return root.sum;
  }
  const mid = Math.floor((root.start + root.end) / 2);
  if (j <= mid) {
    return querySum(root.left, i, j);
  } else if (i > mid) {
    return querySum(root.right, i, val);
  } else {
    return querySum(root.left, i, mid) + querySum(root.right, mid + 1, j);
  }
}
