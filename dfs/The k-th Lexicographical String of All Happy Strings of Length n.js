/*
1415. The k-th Lexicographical String of All Happy Strings of Length n

https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const happyStrings = [];

  const dfs = (chars, str) => {
    if (str.length === n) {
      happyStrings.push(str);
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (str.length === 0 || str.charAt(str.length - 1) != chars.charAt(i)) {
        dfs(chars, str + chars.charAt(i));
      }
    }
  };
  dfs("abc", "");
  //console.log(happyStrings)
  if (happyStrings.length < k) return "";
  return happyStrings[k - 1];
};
