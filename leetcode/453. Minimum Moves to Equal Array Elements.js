/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all 
array elements equal, where a move is incrementing n - 1 elements by 1.
*/

/*
  一次移动将n - 1个元素加1，等价于将剩下的1个元素减1。
  问题也可转化为，将所有数字都减小到最小值，这样难度就大大降低了，我们只要先找到最小值，然后累加每个数跟最小值之间的差值即可
  = sum of all numbers - min value * n
*/

var minMoves = function(nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (i of nums) {
    if (i < min) 
      min = i;
    sum += i;   // sum of all numbers
  }
  return sum - min * nums.length;
};
