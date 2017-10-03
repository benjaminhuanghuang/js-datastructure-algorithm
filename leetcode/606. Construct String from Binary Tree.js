var tree2str = function(t) {
  if (t==null || t.length < 0)
    return "";
  let res = t.val;
  // always has () for left sub tree
  if (t.left != null || t.right !=null)
    res += "(";
  res += tree2str(t.left);
  if (t.left != null || t.right !=null)
    res += ")";
  
  if(t.right != null)
    res +="("+tree2str(t.right) +")"
  
  return  res;
};