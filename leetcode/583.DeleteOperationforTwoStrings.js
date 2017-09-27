/*
  dp[x][y] = x + y     if x == 0 or y == 0
  dp[x][y] = dp[x - 1][y - 1]     if word1[x] == word2[y]
  dp[x][y] = min(dp[x - 1][y], dp[x][y - 1]) + 1     otherwise
*/

var minDistance = function(word1, word2) {
  if (word1 == null && word2 == null) return 0;
  if (word1.length == 0 && word2.length == 0) return 0;
  if (word1 == null || word1.length == 0) return word2.length;
  if (word2 == null || word2.length == 0) return word1.length;

  let len1 = word1.length;
  let len2 = word2.length;
  let dp = new Array(len1 + 1);
  for (let i = 0; i <= len1; i++) 
    dp[i] = new Array(len2 + 1).fill(0);

  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = i + j;
      } else if (word1[i - 1] == word2[j - 1]) {
        //word1[x] == word2[y]
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[len1][len2];
};

let res = minDistance("sea", "eat");
console.log(res);

res = minDistance("a", "b");
console.log(res);