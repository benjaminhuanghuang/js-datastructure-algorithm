/*

17. Letter Combinations of A Phone Number

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

*/

/*
  Solution:
  https://www.youtube.com/watch?v=uMmFXWs_ZMY&ab_channel=%E6%9D%A5Offer-LaiOffer

  Resursion tree

  Time Complexity: O(branch factor ^ depth)  
   Space Complexity:
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const result = [];

  const dfs = (pos, curr) => {
    // base case
    if (curr.length === digits.length) {
      result.push(curr.join(""));
      return;
    }
    // recursive rule
    const digit = digits.charAt(pos);
    const chars = map.get(digit);
    for (let i = 0; i < chars.length; i++) {
      curr.push(chars.charAt(i));
      dfs(pos + 1, curr);
      curr.pop();
    }
  };

  dfs(0, []);

  return result;
};
