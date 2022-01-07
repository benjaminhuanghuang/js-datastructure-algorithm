/*
  647. Palindromic Substrings

  Given a string s, return the number of palindromic substrings in it.
  
  https://leetcode.com/problems/palindromic-substrings/


  # 5. Longest Palindromic Substring
  # 516. Longest Palindromic Subsequence
*/

/*
  取一个中点，向两边延伸
  Time complexity: O(n^2)
  Space complexity: O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let ans = 0;

  const count = (s, l, r) => {
    let ans = 0;
    while ((l >= 0) & (r < s.length) && s[l--] == s[r++]) {
      ++ans;
    }
    return ans;
  };

  for (let i = 0; i < s.length; ++i) {
    ans += count(s, i, i); // odd length
    ans += count(s, i, i + 1); // even length
  }
  return ans;
};
