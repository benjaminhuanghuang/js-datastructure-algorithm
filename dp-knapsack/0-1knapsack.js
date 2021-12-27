/*

https://www.youtube.com/watch?v=xCbYmUPvc2Q&ab_channel=BackToBackSWE

Statement: Given a set of n items numbered from 1 up to n, each with a weight w[i] and a value v[i], 
along with a maximum weight capacity W, maximize the sum of the values of the items in the knapsack01 
so that the sum of the weights is less than or equal to the knapsack's capacity.

target: find a subset, has max value

0-1 means no split

What is the sub-problem?


*/


/*
  bottom - up
*/

function knapsack_DP(capacity, W, V){
  // row reprsent items, cols represent the weight of the knapsack
  const dp = Array.from(Array(W.length+1), ()=>Array(capacity+1).fill(0))

  for(let item =1; item<= W.length ; item++)
  {
    const w = W[item-1], v= V[item-1];
    for(let useCapacity = 1; useCapacity <= capacity ; useCapacity++){
      // consider not picking this item
      dp[item][useCapacity] = dp[item-1][useCapacity];

      // consider pick the current item if profitable
      if(useCapacity >= w && dp[item-1][useCapacity-w] + v > dp[item][useCapacity]){
        dp[item][useCapacity] = dp[item-1][useCapacity-w] + v;
      }
    }
  }

  return dp[W.length][capacity];
}




