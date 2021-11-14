

## Recursion
  Time O(2^N)   因为二叉树的高度为N
    2^0 + 2^1 + 2^2 + ...... + 2^n = 2^(n+1) - 1 = O(2^n) 
    
  Space (N)     因为call stack 和 二叉树的高度为一样N


## Tree path
  Time O(N)   每个节点一次
  Space O(H)  树深度

## Recursion + Mmorization
  https://www.youtube.com/watch?v=ZLwwc3-vVP4&ab_channel=%E6%9D%A5Offer-LaiOffer

  How many numDecoding(level) 需要记录： n+1 (因为 level from 0 to N)
  计算每一个  numDecoding(level) 的time complexity 为 O(1)

  Time complexity is O(1) * (N+1) = O(N)

  sapce complexity is O(N)