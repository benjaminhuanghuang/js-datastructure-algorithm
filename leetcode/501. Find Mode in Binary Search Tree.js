/*
501. Find Mode in Binary Search Tree
*/

var findMode = function(root) {
  let state = {
    dict:{},
    max:0
  }
  inorderIterator(root, state);
  let res =[];
  for (key in state.dict)
  {
    iif(state.dict[key] == state.max)
    {
      res.push(parseInt(key));
    }
  }
  return res;
};

function inorderIterator(root, state)
{
  if(root == null)
    return;
  inorderIterator(root.left, state);
  
  if(root.val in state.dict)
    state.dict[val] ++;
  else
    state.dict[val] ++;
  state.max = Math.max(state.max, state.dict[val]);

  inorderIterator(root.right, state);
}