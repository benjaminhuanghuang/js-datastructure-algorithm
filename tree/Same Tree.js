/*
  100
*/
const isSameTree = (r1, r2) => {
  if (r1 === null && r2 === null) return true;
  if (r1 === null || r2 === null) return false;
  return r1.val === r2.val && isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right);
};
