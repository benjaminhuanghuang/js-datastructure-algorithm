/*
496. Next Greater Element I

Easy

https://leetcode.com/problems/next-greater-element-i/
*/
/*
    Monoton Stack + HashTable 
  
    Using a stack to store the nums whose next greater isn’t found yet.
  
    栈stack维护nums的递减子集，记nums的当前元素为n，栈顶元素为top

    重复弹出栈顶，直到stack为空，或者top大于n为止

    将所有被弹出元素的next greater element置为n

    时间复杂度O(n + m) 其中n为nums1的长度，m为nums2的长度

    http://bookshadow.com/weblog/2017/02/05/leetcode-next-greater-element-i/

    https://zxi.mytechroad.com/blog/algorithms/array/leetcode-496-next-greater-element-i/
  */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const s = [];
  const next = new Map();
  // decending
  for (const num of nums2) {
    while (s.length > 0 && num > s[s.length - 1]) {
      next.set(s[s.length - 1], num);
      s.pop();
    }
    s.push(num);
  }
  const ans = [];
  for (const num of nums1) {
    ans.push(next.has(num) ? next.get(num) : -1);
  }
  return ans;
};
