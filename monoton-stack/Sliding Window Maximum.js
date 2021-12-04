/*
239. Sliding Window Maximum
https://leetcode.com/problems/sliding-window-maximum/

输出移动窗口的最大值
*/

/*
https://zxi.mytechroad.com/blog/heap/leetcode-239-sliding-window-maximum/

Monotonic Queue

Time complexity: O(n)
Space complexity: O(k)


Brute froce 
  Time: O((n-k+1)*k)      Space: O(1)
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
    if (i + 1 >= k) {
      ans.push(q.max());
      if (nums[i - k + 1] == q.max()) {
        q.pop();
      }
    }
  }
  return ans;
};

/*
  从大到小, 每次push都会pop掉比当前元素小的元素
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
