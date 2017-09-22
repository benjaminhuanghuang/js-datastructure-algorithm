function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isSubtree = function(s, t) {
  if (s == null && t == null) return true;
  if (s == null) return false;
  if (t == null) return true;

  if (isSameTree(s, t))
    return true;
  return isSubtree(s.left ,t) || isSubtree(s.right, t);
};

function isSameTree(s, t) {
  if (s == null && t == null) return true;
  if (s == null) return false;
  if (t == null) return false;
  if (s.val == t.val) 
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);

  return false;
}
