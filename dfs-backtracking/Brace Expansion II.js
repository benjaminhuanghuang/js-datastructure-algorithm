/*
1096. Brace Expansion II

Level: Hard

https://leetcode.com/problems/brace-expansion-ii
*/

/*
https://www.youtube.com/watch?v=K5nbi0CECjA&ab_channel=HuifengGuan

{}与{} 之间是叉乘 {a,b}{b,d}
{c}, {c,d} 是并操作  {c,d}
{a,b}c 相当于 {a,b}{c}
*/
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  let s = "";
  // {a,b}c 相当于 {a,b}{c}
  for (const ch of expression) {
    if (isalpha(ch)) {
      s += "{";
      s += ch;
      s += "}";
    } else {
      s += ch;
    }
  }
  let ans = [];
  let stackStr = []; // set()
  let stackOp = [];
  let currStrSet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{") {
      stackStr.push(currStrSet);
      stackOp.push(0);
    } else if (s[i] == ",") {
      stackStr.push(currStrSet);
      stackOp.push(1);
      cur = {};
    } else if (s[i] == "}") {
      while (stackOp[stackOp.length - 1] == 1) {
        curStrSet = combine(stackStr.pop(), cur);
        stackOp.pop();
      }
      if (stackOp[stackOp.length - 1] == 0) {
        curStrSet = crossProduct(stackStr.pop(), cur);
        stackOp.pop();
      }
    } else {
      let j = i + 1;
      while (j < s.length && isalpha(s[j])) j++;
      cur = new Set([s.substring(i, j - i)]);
      i = j - 1;
    }
  }

  ans.sort();
  return ans;
};

function isalpha(c) {
  return c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0);
}

function combine(s, t) {
  let ret = new Set();
  for (const x of s) ret.add(x);
  for (const y of t) ret.add(y);
  return ret;
}

function crossProduct(s, t) {
  if (s.size == 0) s.add("");
  if (t.size == 0) t.add("");
  let ret = new Set();
  for (const x of s) for (const y of t) ret.add(x + y);
  return ret;
}
