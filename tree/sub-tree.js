/*
LeetCode 572. Subtree of Another Tree

Easy
*/

/*
Time complexity: O(max(n, m))

Space complexity: O(max(n, m))
*/
var isSubtree = function (root, subRoot) {
  const isSameTree = (r1, r2) => {
    if (r1 === null && r2 === null) return true;
    if (r1 === null || r2 === null) return false;
    return r1.val === r2.val && isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right);
  };

  
  if (isSameTree(root, subRoot)) return true;
  if (root === null) return false; 
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
