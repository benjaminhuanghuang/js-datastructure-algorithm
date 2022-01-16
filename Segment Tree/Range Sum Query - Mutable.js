/*
307. Range Sum Query - Mutable

https://leetcode.com/problems/range-sum-query-mutable/

*/
/*
https://www.youtube.com/watch?v=rYBtViWXYeI&ab_channel=HuaHua

*/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.root = buildTree(0, nums.length - 1, nums);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  updateTree(this.root, index, val);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return querySum(this.root, left, right);
};

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
  const left = buildTree(start, mid, vals);
  const right = buildTree(mid + 1, end, vals);

  return new SegmentTreeNode(start, end, left.sum + right.sum, left, right);
}

// log(N)
function updateTree(root, index, val) {
  if (root.start == index && root.end == index) {
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
    return querySum(root.right, i, j);
  } else {
    return querySum(root.left, i, mid) + querySum(root.right, mid + 1, j);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
