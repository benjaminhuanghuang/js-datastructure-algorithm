/*
115. Distinct Subsequences

https://leetcode.com/problems/distinct-subsequences/


两个字符串，一般是2d-DP， 子问题是 f(s[0..i], t[0..j]) 

*/

/*
  https://www.youtube.com/watch?v=-RDzMJ33nx8&ab_channel=NeetCode

  Time Comlexity O(N^2)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const mem = new Map();

  const dfs = (si, ti) => {
    // when t is empty string
    if (ti == -1) return 1;
    if (si == -1) return 0;
    const memKey = si + " " + ti;
    if (mem.has(memKey)) return mem.get(memKey);
    let ans = 0;
    if (s.charAt(si) == t.charAt(ti)) {
      ans = dfs(si - 1, ti - 1) + dfs(si - 1, ti); // exclude last char from s
    } else {
      // exclude last char from s
      ans = dfs(si - 1, ti);
    }
    mem.set(memKey, ans);
    return ans;
  };

  return dfs(s.length - 1, t.length - 1);
};
/*
  两个字符串，一般是2d-DP， 子问题是 f(s[0..i], t[0..j]) 


  Time Comlexity O(N^2)
*/
var numDistinct_DP = function (s, t) {
  const ls = s.length;
  const lt = t.length;
  const dp = Array.from(Array(lt + 1), () => Array(ls + 1).fill(0));
  for (let i = 0; i <= ls; i++) {
    // when t is empty,  ans is 1
    dp[0][i] = 1;
  }

  for (let i = 1; i <= lt; ++i)
    for (let j = 1; j <= ls; ++j) {
      let ans = 0;
      if (t[i - 1] == s[j - 1]) {
        ans = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        // exclude last char from s
        ans = dp[i][j - 1];
      }
      dp[i][j] = ans; //dp[i][j - 1] + (t[i - 1] == s[j - 1] ? dp[i - 1][j - 1] : 0);
    }
  return dp[lt][ls];
};
/*
"rabbbit"
"rabbit"
"babgbag"
"bag"
*/
const n = numDistinct("bi", "it");
console.log(n);
