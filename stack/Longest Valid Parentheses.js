/*
32. Longest Valid Parentheses

https://leetcode.com/problems/longest-valid-parentheses/
*/


/*
Use a stack to track the index of all unmatched open parentheses.

Time complexity: O(n)

Space complexity: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  const stack = [];
  let leftMost = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++)
  {
    if (s[i] == '(')
    {
      stack.push(i);
    }
    else  // ')'
    {
      if (stack.length === 0)
      {
        leftMost = i + 1;  // start a new match
      }
      else
      {
        const index = stack.pop(); // pop出前一个（ 的index
        // pop 后 如果 stack is not empty, 当前合法括弧的长度从pop 后的stack.top算起， len = i - stack[stack.length-1]
        // 比如 (()() ,长度为4
        // 如果stack is empty, 说明完全匹配，当前合法括弧的长度从leftMost算起， i - leftMost + 1
        const len =  stack.length === 0 ? i - leftMost + 1 : i - stack[stack.length-1];
        maxLen = Math.max(maxLen, len);
      }
    }
  }
  return maxLen;
};