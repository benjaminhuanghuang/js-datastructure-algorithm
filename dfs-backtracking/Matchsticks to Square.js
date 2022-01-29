/*
473. Matchsticks to Square

Medium

https://leetcode.com/problems/matchsticks-to-square

[Amazon]
*/

/*
https://www.youtube.com/watch?v=hUe0cUKV-YY&ab_channel=NeetCode
Time: O(4^N)   因为decision tree 的高度为N, 每个节点都有 Left， top， right， bottom 4个分支
*/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const dfs = (pos) => {
    // 退出条件
    if (pos == matchsticks.length) return true;

    for (let i = 0; i < 4; i++) {
      if (sides[i] + matchsticks[pos] <= sideLen) {
        sides[i] += matchsticks[pos];
        if (dfs(pos + 1)) return true;
        sides[i] -= matchsticks[pos];
      }
    }
    return false;
  };

  // sum of all matchsticks
  const sum = matchsticks.reduce((s, i) => s + i);

  if (sum % 4 != 0 || sum == 0) return false;

  // 从大到小排列可以提前发现length 超出期望
  matchsticks.sort((a, b) => b - a);
  const sides = new Array(4).fill(0);
  const sideLen = sum / 4;

  return dfs(0);
};

/*
  Solution: 
  https://www.youtube.com/watch?v=Z8cz4Wb5P2g
*/
var makesquare = function (matchsticks) {
  // 一共 4组，每组都要凑成 target
  const dfs = (pos, target, currSum, groupId) => {
    if (groupId == 4) return true;
    if (currSum == target) return dfs(0, target, 0, groupId + 1);
    if (currSum > target) return false;

    for (let i = pos; i < matchsticks.length; i++) {
      if (visited[i]) continue;
      if (i > 0 && matchsticks[i] == matchsticks[i - 1] && !visited[i - 1]) continue;
      visited[i] = true;
      if (dfs(i + 1, target, currSum + matchsticks[i], groupId)) return true;
      visited[i] = false;
    }
    return false;
  };

  // sum of all matchsticks
  const sum = matchsticks.reduce((s, i) => s + i);

  if (sum % 4 != 0 || sum == 0) return false;

  matchsticks.sort((a, b) => a - b);
  const visited = new Array(matchsticks.length).fill(false);

  // try
  return dfs(0, sum / 4, 0, 1);
};
