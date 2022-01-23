/*
439. Ternary Expression Parser

Medium

Input: "F?1:T?4:5"

Output: "4"

https://leetcode.com/problems/ternary-expression-parser/
https://massivealgorithms.blogspot.com/2016/10/leetcode-439-ternary-expression-parser.html
*/

/*
https://www.youtube.com/watch?v=LGwx6zakbSI&ab_channel=HuifengGuan

当发现?字符，表明这可能是一组标准型的head。所以把a?之前的字符串扔进栈里，然后重置curRes并顺着a?继续向后探索
*/

function parseTernary(expression) {
  const stack = [];
  let curRes;

  for (let i = 0; i < expression.length; i++) {
    if (i + 1 < expression.length && expression[i + 1] == "?") {
      stack.push(curRes);
      curRes = expression[i];
    } else {
      curRes += expression[i];
      while (curRes.size() == 5) {
        curRes = evaluate(curRes);
        curRes = stack.pop() + curRes;
        Stack.pop();
      }
    }
  }

  return curRes;
}

function evaluate(s) {
  let result;
  if (s[0] == "T") result = s[2];
  else result = s[4];
  return result;
}
