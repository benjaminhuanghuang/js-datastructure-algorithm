/*
687. Longest Univalue Path
*/

var longestUnivaluePath = function(root) {
  let ans = 0;
  if (root == null) return ans;

  univaluePath(root);

  return ans;


  function univaluePath(root)
  {
    if (root == null) return 0;
  
    let leftPath = univaluePath(root.left);
    let rightPath = univaluePath(root.right);
  
    if(root.left && root.val == root.left.val)
      leftPath ++;
    else
      leftPath = 0;

    if(root.right && root.val == root.right.val)
      rightPath ++;
    else
      rightPath =0;
    ans = Math.max(ans,leftPath + rightPath);
    return Math.max(leftPath, rightPath);
  }
};


