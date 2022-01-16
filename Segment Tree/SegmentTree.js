class SegmentTreeNode {
  constructor(start, end, sum, left, right) {
    this.start = start;
    this.end = end;

    this.sum = sum; // cam be max/min

    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(start, end, vals) {
  if (start == end) {
    return new SegmentTreeNode(start, end, vals[start]);
  }

  const mid = Math.floor((start + end) / 2);
  const left = buildTree(sart, mid, vals);
  const right = buildTree(mid + 1, end, vals);

  return new SegmentTreeNode(start, end, left.sum + right.sum, left, right);
}
