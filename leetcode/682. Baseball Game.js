var calPoints = function(ops) {
  if(ops == null || ops.length == 0)
    return 0;
  let stack =[];

  for(op of ops)
  {
    if(op == "C")
    {
      stack.pop();
    }
    else if(op == "D")
    {
      let score = stack[stack.length -1 ] * 2;
      stack.push(score);
    }
    else if(op == "+")
    {
      let score = stack[stack.length -1 ] + stack[stack.length -2 ];
      stack.push(score);
    }
    else
    {
      stack.push(parseInt(op));
    }
  }
  
  return stack.reduce( (a, b) => a + b, 0);
}
