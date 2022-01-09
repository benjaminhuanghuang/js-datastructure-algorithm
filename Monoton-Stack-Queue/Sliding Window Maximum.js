/*
239. Sliding Window Maximum
https://leetcode.com/problems/sliding-window-maximum/

输出移动窗口中的最大值
*/

/* 
Solution: Brute froce 
  对于 nums[i], 对比nums[i]和sliding window中的K个元素
  
  Time: O((n-k)*k)      Space: O(1)
*/

/*
decreasing Monotonic Queue (keep the index)
https://www.youtube.com/watch?v=DfljaUwZsOk&ab_channel=NeetCode

to case nums=[1,2,3,4] K=3 , 
对于 nums[i], 不用遍历 K个元素，而只对比nums[i]和sliding window中最大的元素
*/
var maxSlidingWindow = function (nums, k) {
  const q = []; // keep the index
  const ans = [];
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    // decreasing Monotonic Queue
    while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
      q.pop();
    }
    q.push(r);

    // remove the left val from window
    if (l > q[0]) q.shift();
    //
    if (r + 1 >= k) {
      ans.push(nums[q[0]]);
      l++;
    }
    r++;
  }
  return ans;
};

/*
Monotonic Queue 

https://zxi.mytechroad.com/blog/heap/leetcode-239-sliding-window-maximum/

Time complexity: O(n)
Space complexity: O(k)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const q = new MonotonicQueue();
  const ans = [];

  for (let i = 0; i < nums.length; ++i) {
    q.push(nums[i]);

    // sliding whind is ready
    if (i + 1 >= k) {
      // collect the max value in the monoton Q
      ans.push(q.max());
      // 只有max == sliding window最左边元素时才需要pop，因为需要移动sliding window 
      if (nums[i - k + 1] == q.max()) {
        q.pop();
      }
    }
  }
  return ans;
};

/*
  decreasing queue, 每次push都会pop掉比当前元素小的元素
*/
class MonotonicQueue {
  constructor() {
    this.data = [];
  }
  push(e) {
    while (this.data.length > 0 && e > this.data[this.data.length - 1]) {
      this.data.pop();
    }
    this.data.push(e);
  }

  pop() {
    this.data.shift();
  }

  max() {
    return this.data[0];
  }
}
