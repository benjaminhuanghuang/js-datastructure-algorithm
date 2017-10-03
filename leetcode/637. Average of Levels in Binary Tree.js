var averageOfLevels = function(root) {
  if (root == null)
    return [];

  let res = [];
  let layer = [root];

  while (layer.length > 0){
    let nextLayer = [];
    let sum = 0;
    for (node of layer)
    {
      sum +=node.val;
      if(node.left)
        nextLayer.push(node.left);
      if(node.right)
        nextLayer.push(node.right);
    }
    res.push(sum/layer.length);
    layer = nextLayer;
  }
  return res;
};