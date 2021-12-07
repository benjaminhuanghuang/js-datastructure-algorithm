/*
91. Decode Ways

https://leetcode.com/problems/decode-ways/

一个加密的数字字符串，一共有多少种不同的解密方式。
*/
/*
  https://www.youtube.com/watch?v=6aEyTjOwlJU&ab_channel=NeetCode

  Recursion tree
  3, 9   -> X
  10, 19 -> 1 or 1X
  20, 26 -> 2 or 2X
  06 -> invalid
*/

var numDecodings = function (s) {
  if (s.length === 0) return 0;
  const dp = {};
  const dfs = (i) => {
    if (i >= s.length) return 1;   // find a path
    if (dp[i]) return dp[i];

    // 0 is invalid
    if (s.charAt(level) == "0") return 0;

    // any non-0 number, can ues 1 digit
    const ans = dfs(i + 1);

    if (i + 1 < s.length && (s.charAt(i) == "1" || (s.charAt(i) == "2" && s.charCodeAt(i + 1) <= "6".charCodeAt(0)))) {
      // 用两位数字，条件是 1X  or 20 ~26
      ans += dfs(i + 2);
    }
    dp[i] = ans;
    return ans;
  };
  return dfs(s, 0);
};

/*
  Recursion
  https://www.youtube.com/watch?v=ZLwwc3-vVP4&ab_channel=%E6%9D%A5Offer-LaiOffer

  Time O(2^N)   因为二叉树的高度为N
  Space (N)     因为call stack 和 二叉树的高度为一样N

  if s[i] can be decode (1 to 9)
    ways += numDecoding(s, index +1)
  if s[i] and s[i + 1] can be decode (10 to 26)
    ways += numDecoding(s, index +2)
*/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length === 0) return 0;

  const helper = (s, level) => {
    if (level === s.length) return 1;

    let ways = 0;
    if (s.charAt(level) != "0") {
      // 只用1个数字
      ways += helper(s, level + 1);
    }

    if (
      level + 1 < s.length &&
      (s.charAt(level) == "1" || (s.charAt(level) == "2" && s.charCodeAt(level + 1) <= "6".charCodeAt(0)))
    ) {
      // 用两位数字，条件是 1X  or 20 ~26
      ways += helper(s, level + 2);
    }
    return ways;
  };
  return helper(s, 0);
};

/*
  Recursion + Mmorization
  https://www.youtube.com/watch?v=ZLwwc3-vVP4&ab_channel=%E6%9D%A5Offer-LaiOffer

  Time O(2^N)   因为二叉树的高度为N
  Space (N)     因为call stack 和 二叉树的高度为一样N

  if s[i] can be decode (1 to 9)
    ways += numDecoding(s, index +1)
  if s[i] and s[i + 1] can be decode (10 to 26)
    ways += numDecoding(s, index +2)

  numDecoding(level) = numDecoding(level + 1) + numDecoding(level + 2)
  numDecoding(level + 1) = numDecoding(level + 2) + numDecoding(level + 3)
  
  How many numDecoding(level) 需要记录： n+1 (因为 level from 0 to N)
  计算每一个  numDecoding(level) 的time complexity 为 O(1)

  Time complexity is O(1) * (N+1) = O(N)
  sapce complexity is O(N)
*/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length === 0) return 0;
  const m = new Array(s.length + 1).fill(-1);

  const helper = (s, level) => {
    if (m[level] != -1) {
      return m[level];
    }
    if (level === s.length) {
      m[1] = 1;
      return 1;
    }
    let ways = 0;
    if (s.charAt(level) != "0") {
      ways += helper(s, level + 1);
    }
    // 1x or <= 26
    if (
      level + 1 < s.length &&
      (s.charAt(level) == "1" || (s.charAt(level) == "2" && s.charCodeAt(level + 1) <= "6".charCodeAt(0)))
    ) {
      ways += helper(s, level + 2);
    }
    m[level] = ways;
    return ways;
  };
  return helper(s, 0);
};

/*
  Bottom Up DP
  Time O(N)
  Space O(N)

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
  for (let i = 1; i <= s.length; ++i) {
    let way = 0;
    if (s.charAt(i - 1) != "0") {
      // treat s[i] as a single number, need check s[i-1]
      way += dp[i - 1];
    }
    if (i > 1 && (s.charAt(i - 2) == "1" || (s.charAt(i - 2) == "2" && s.charAt(i - 1) <= "6"))) {
      way += dp[i - 2];
    }
    dp[i] = way;
  }
  return dp[dp.length - 1];
};

/*

  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-91-decode-ways/

  W("") = 1
  W("0xxxxx") = 0    There is no way if the string starts with 0

  W(S[0...n1]) = W(s[1...n-1]) + W(s[2..n-1]) if '10' <= S[0,1] < '26'

  Time complexity: O(n^2)  因为使用了substing(), subtsring is O(N)

  Space complexity: O(n^2)
*/
var numDecodings = function (s) {
  if (s.length === 0) return 0;
  const m_ways = new Map();
  m_ways.set("", 1);

  const ways = (s) => {
    if (m_ways.has(s)) {
      return m_ways.get(s);
    }
    if (s.charAt(0) === "0") {
      return 0;
    }
    if (s.length === 1) {
      return 1;
    }
    let way = ways(s.substring(1));
    if (s.length > 1 && (s.charAt(0) == "1" || (s.charAt(0) == "2" && s.charAt(1) <= "6"))) {
      way += ways(s.substring(2));
    }
    m_ways.set(s, way);
    return way;
  };

  return ways(s);
};

/*
  Use index insead of sub string

  Time complexity: O(n)  因为使用了substing(), subtsring is O(N)
  Space complexity: O(n)
*/
var numDecodings = function (s) {
  if (s.length === 0) return 0;
  const m_ways = new Map(); // index: way

  const ways = (s, start) => {
    if (m_ways.has(start)) {
      return m_ways.get(start);
    }
    if (s.charAt(start) === "0") {
      return 0;
    }
    if (start >= s.length) {
      // empty string
      return 1;
    }
    let way = ways(s, start + 1);
    if (start < s.length - 1 && (s.charAt(start) == "1" || (s.charAt(start) == "2" && s.charAt(start + 1) <= "6"))) {
      way += ways(s, start + 2);
    }
    m_ways.set(start, way);
    return way;
  };

  return ways(s, 0);
};
