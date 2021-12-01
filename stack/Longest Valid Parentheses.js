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
        leftMost = i + 1;
      }
      else
      {
        const index = stack.pop(); // 前一个（ 的index
        // pop 后 如果 !stack.empty, len = i - stack[stack.length-1] , stack[stack.length-1]是当前合法括弧的前一个（
        // 比如 (()() ,长度为4
        // 如果stack is empty, 当前合法括弧的长度为 i - leftMost + 1
        const len =  stack.length === 0 ? i - leftMost + 1 : i - stack[stack.length-1];
        maxLen = Math.max(maxLen, len);
      }
    }
  }
  return maxLen;
};