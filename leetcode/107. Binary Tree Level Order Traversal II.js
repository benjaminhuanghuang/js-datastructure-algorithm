var levelOrderBottom = function(root) {
  let res = [];
  if (root == null) return res;

  let layer = [root];
  while (layer.length > 0) {
    let vals = [];
    let nextLayer = [];
    for (node of layer) {
      vals.push(node.val);
      if (node.left)
        nextLayer.push(node.left);
      if (node.right) 
        nextLayer.push(node.right);
    }
    res.push(vals);
    layer = nextLayer;
  }
  return res.reverse();
};
