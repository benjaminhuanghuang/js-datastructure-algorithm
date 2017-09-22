
let pair={
  '}':'{',
  ']':'[',
  ')':'(',
}
var isValid = function(s) {
  if(s == null || s.length < 2)
    return false;

  let stack =[];

  for (let i =0;i<s.length; i++)
  {
    if (s[i] === '(' || s[i] === '{' ||s[i] === '[')
      stack.push(s[i]);
    else
    {
      if (stack.length == 0)
        return false;
      if (stack[stack.length -1] === pair[s[i]])
        stack.pop();
      else
        return false; 
    }
  }
  return stack.length == 0;
};