/*
  10. Regular Expression Matching
  https://leetcode.com/problems/regular-expression-matching/
*/

/*
  DFS or DP

    https://www.youtube.com/watch?v=KN22ZEpRTFY&ab_channel=%E5%82%85%E7%A0%81%E7%88%B7

    https://redquark.org/leetcode/0010-regular-expression-matching/
    
    Create a boolean 2D dp array with sizes as boolean[][] dp = new boolean[s.length() + 1][p.length() + 1]. 
    We are adding extra 1 to incorporate the case in case either or both of the strings are empty.
    
    
    If both strings are empty, then it’s a match, thus, dp[0][0] = true.
    Let’s take an example s = "aab" and p = "c*a*b" and create a DP table.

*/


var isMatch = function (s, p) {
    const rows = s.length;
    const columns = p.length;

    /// Base conditions
    if (rows == 0 && columns == 0) {
        return true;
    }
    if (columns == 0) {
        return false;
    }
    
    // DP array
    const dp = Array.from({ length: s.length + 1 }, () => [false]);
    // Empty string and empty pattern are a match
    dp[0][0] = true;

    // Deals with patterns with *
    for (let i = 1; i < columns + 1; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];
        }
        else {
            dp[0][i] = false;
        };
    }
    // For remaining characters
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < columns + 1; j++) {
            if (p[j - 1] === '*') {
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            } else if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }
    return dp[rows][columns];
};

/*
  DFS
*/

var isMatch = function (s, p) {
  const dfs = (s, p) =>{
    if (p.length == 0)
    return s.lengnt == 0;

// // normal case, e.g. 'a.b','aaa', 'a'
// if (p[1] != '*' || p[1] == '\0')
// {
//     // no char to match
//     if (*s == '\0')
//         return false;

//     if (*s == *p || *p == '.')
//         return isMatch(s + 1, p + 1);
//     else
//         return false;
// }
// else
// {
//     int i = -1;
//     while (i == -1 || s[i] == p[0] || p[0] == '.')
//     {
//         if (isMatch(s + i + 1, p + 2))
//             return true;
//         if (s[++i] == '\0')
//             break;
//     }
//     return false;
// }

// return false;
  }

  return dfs(s, p)
}