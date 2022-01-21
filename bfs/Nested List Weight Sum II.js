/*
364. Nested List Weight Sum II

https://leetcode.com/problems/nested-list-weight-sum-ii/
https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/364-nested-list-weight-sum-ii.html

Example 1: Given the list [[1,1],2,[1,1]], return 8. (four 1's at depth 1, one 2 at depth 2)

和 #339. Nested List Weight Sum 的区别: 深度越深，权重越小，II 无法提前知道depth和weight
*/

/*
  因为无法提前知道depth和weight， 每深入一层，把上一层的值再加一遍，与层有关，需要使用BFS
*/
function depahtSumInverse( nestedList) {
  let ans = 0;
  let levelSum =0;
  const levelList = nestedList;

  while(levelList.length > 0) {
    const nextLevelList = [];
    for(let i =0; i< q.length ; i++) {
      const curr = levelList[i];
      if(curr.isInteger()) {
        levelSum += curr.getInteger();
      }
      else{
        nextLevelList = nextLevelList.concat(c.getList());
      }
    }
    // 每深入一层，把上一层的值再加一遍
    ans  = ans + levelSum;
    levelList = nextLevelList;
    levelSum = 0;
  }
  return ans;
}