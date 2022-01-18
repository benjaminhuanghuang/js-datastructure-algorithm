/*
150. Evaluate Reverse Polish Notation

Medium

https://leetcode.com/problems/evaluate-reverse-polish-notation/
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  const stack= [];
  for (const token of tokens)
  {
    if (!isNaN(parseInt(token)))   // check last in the token
    {
      s.push(parseInt(token));
    }
    else
    {
      const n2 = stack.pop();
      const n1 = stack.top();
      let n = 0;
      switch (token)
      {
      case '+':
        n = n1 + n2;
        break;
      case '-':
        n = n1 - n2;
        break;
      case '*':
        n = n1 * n2;
        break;
      case '/':
        n = Math.trunc(n1 / n2);
        break;
      }
      stack.push(n);
    }
  }
  return stack[0];
};