/*
72. Edit Distance

https://leetcode.com/problems/edit-distance/
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const mem = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(-1));

  const helper = (l1, l2) => {
    if (l1 == 0) return l2;   // delete all
    if (l2 == 0) return l1;   // 
    if (mem[l1][l2] >= 0) return mem[l1][l2];

    let ans;
    if (word1.charAt(l1 - 1) == word2.charAt(l2 - 1)) {
      ans = helper(l1 - 1, l2 - 1);
    } else {
      //
      const ans1 =  helper(l1 - 1, l2 - 1) + 1;  // replace last 1 char in word1 or word2
      const ans2 = helper(l1, l2 - 1) + 1;  // delete 1 char from word2
      const ans3 = helper(l1-1, l2 ) + 1;  // delete 1 char from word1
      ans = Math.min(ans1, ans2, ans3);
    }
    mem[l1][l2] = ans;
    return ans;
  };
  return helper(l1, l2);
};

/*
  DP
  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-72-edit-distance/
 */
var minDistance = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const dp = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(-1));

  for (let i = 0; i <= l1; ++i) dp[i][0] = i;
  for (let j = 0; j <= l2; ++j) dp[0][j] = j;

  for (let i = 1; i <= l1; ++i)
    for (let j = 1; j <= l2; ++j) {
      let c = word1[i - 1] == word2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j - 1] + c, Math.min(dp[i][j - 1], dp[i - 1][j]) + 1);
    }

  return dp[l1][l2];
};
