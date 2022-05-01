/*

5. Longest Palindromic Substring

https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

# 647. Palindromic Substrings
# 516. Longest Palindromic Subsequence

*/

/*
  Brute force
  Time complexity: O(n^3). 
*/
var longestPalindrome_BF = function(s) {
  let longest = '';

 const isPanlindrome= (str)=>
 {
   let l =0; 
   let r = str.length-1;
   while(l < r) {
     if(str.charAt(l++) != str.charAt(r--)){
       return false;
     }
   }
   return true;
 }
 // Nested loop to mark start and end index
 for (let i = 0; i < s.length; i++) {
   for (let j = i; j < s.length; j++) {
     const curr = s.substring(i, j + 1);
     // 先判断 curr.length > longest.length 可以减少调用 isPanlindrome
     if(curr.length > longest.length && isPanlindrome(curr))
     {
       longest = curr;
     }
   }
 }
 return longest;
};


/*
  https://www.youtube.com/watch?v=g3R-pjUNa3k&ab_channel=HuaHua

  Try all possible i and find the longest palindromic string whose center is i (odd case) and i / i + 1 (even case).

  Time complexity: O(n^2)

  Space complexity: O(1)
*/
var longestPalindrome = function (s) {
  // helper
  const getLen = (s, l, r) => {
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      l--;
      r++;
    }
    return r - l - 1;  // -1!
  };
  
  let maxLen = 0;
  let start = 0;
  for (let i = 0; i < s.length; ++i) {
    let len = Math.max(getLen(s, i, i), getLen(s, i, i + 1));
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.substring(start, start + maxLen);
};


/*
https://www.youtube.com/watch?v=XYQecbcd6_c&ab_channel=NeetCode


isPanlindrom(start, end) = isPanlindrom(start+1, end -1) && s[start] == s[end]
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_DP = function (s) {
  const n = s.length;
  // row is start pos, col is end pos
  const dp = Array.from(Array(n + 1), Array(n + 1).fill(false));
  for (let i = 0; i < n; ++i) dp[i][i] = true;

  // check for sub-string of length 2.
  let start = 0;
  for (let i = 0; i < n - 1; ++i) {
    if (str[i] == str[i + 1]) {
      table[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for lengths greater than 2.
  // k is length of substring
  for (let k = 3; k <= n; ++k) {
    // Fix the starting index
    for (let i = 0; i < n - k + 1; ++i) {
      // Get the ending index of substring from
      // starting index i and length k
      let j = i + k - 1;

      // checking for sub-string from ith index to
      // jth index iff str.charAt(i+1) to
      // str.charAt(j-1) is a palindrome
      if (table[i + 1][j - 1] && str[i] == str[j]) {
        table[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }
};

/*
  recursion and memorization
  思路错误, 此方法适用于 Longest Palindromic Subsequence
  aacabdkacaa
  "cbbd"
*/
var longestPalindrome_RM_Wrong = function (s) {
  // returns [is s[strat, end] a palindrome string, the LPS between start and end]

  const dfs = (start, end) => {
    if (start == end) return [true, s.charAt(start)];
    if (start > end) return [true, ""];
    if (s.charAt(start) == s.charAt(end)) {
      let subAns = dfs(start + 1, end - 1);
      if (subAns[0]) {
        return [true, s.charAt(start) + subAns[1] + s.charAt(end)];
      } else {
        return subAns;
      }
    } else {
      let ans = dfs(start + 1, end);
      const s2 = dfs(start, end - 1);
      if (s2[1].length > ans[1].length) {
        ans = s2;
      }
      ans[0] = false;
      return ans;
    }
  };
  const ans = dfs(0, s.length - 1);
  console.log(ans);
  return ans[1];
};



const input = "aacabdkacaa";
const out = longestPalindrome_RM(input);
console.log(out);
