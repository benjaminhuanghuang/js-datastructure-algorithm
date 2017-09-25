function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root == null) return 0;

  let res = pathTraverse(root, sum);
  res += pathSum(root.left, sum);
  res += pathSum(root.right, sum);

  return res;
};

function pathTraverse(root, sum) {
  if (root == null) return 0;
  let res = root.val == sum ? 1 : 0;
  res += pathTraverse(root.left, sum - root.val);
  res += pathTraverse(root.right, sum - root.val);
  return res;
}
