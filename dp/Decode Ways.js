/*
91. Decode Ways

https://leetcode.com/problems/decode-ways/

一个加密的数字字符串，一共有多少种不同的解密方式。
*/

/*
  It's the easiest solution to understand.
  dp[i] 表示i个字符可以有几个解 
  dp[0] 表示 empty string """

  对于s[i], 有几种可能：
  如果s[i]=='0' s[i]不能单独作为一个字符，只能s[i-1,i] 放在一起才合法，此时s[i] = s[i-2]
  如果s[i]!='0' s[i]可以单独作为一个字符，此时s[i] = s[i-1]
  如果s[i-1]=='0' s[i-1...i]不合法，此时s[i] = s[i-1]
  如果s[i-1...i] 是一个合法的两位数字即10 to 26 此时 s[i] = s[i-1] + s[i-2] 
  
*/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length === 0) return 0;
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; ++i) {
    let way = 0;
    if (s.charAt(i - 1) != "0")
      // treat s[i] as a single number, need check s[i-1]
      way += dp[i - 1];
    if (i > 1 && (s.charAt(i - 2) == "1" || (s.charAt(i - 2) == "2" && s.charAt(i - 1) <= "6"))) way += dp[i - 2];
    dp[i] = way;
  }
  return dp[dp.length - 1];
};
