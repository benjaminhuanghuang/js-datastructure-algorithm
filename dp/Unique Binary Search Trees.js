/*
96. Unique Binary Search Trees

https://leetcode.com/problems/unique-binary-search-trees/
*/
/*
  Recursion & Memoization

  Set the root to each of the number 

  左树节点数 0 到 n-1， 右树节点数 n-1 到 0  
  f(n) = f(0) * f(n-1) + f(1) * f(n-2) + ... + f(n-1) * f(0) = 
*
/**
 * @param {number} n
 * @return {number}
 */ 
 var numTrees = function(n) {
    if(n <= 1) return 1;
    let count = 0;
    for(let i =1; i <=n ; i++)
    {
      // Set the root to each of the number, 
      // left sub tree can have i-1 node, right sub tree can have n - i node
      count+= numTrees(i -1) * numTrees(n-i) 
    }

    return count;
};


/*
Solution: DP
dp[i] = sum(dp[左节点数] * dp[i – 左节点数 – 1]) (0 <= j < i )

root: 1 node
left child: j nodes
right child i – j – 1 nodes

try all possible partitions

ans = dp[n]

Time complexity: O(n^2)
Space complexity: O(n)
*/

var numTrees = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++)
    for(let j = 0; j < i; j++)
      dp[i] += dp[j] * dp[i - j - 1];
  return dp[n];
};