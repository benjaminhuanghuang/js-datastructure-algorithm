/*
1019. Next Greater Node In Linked List

Medium

https://leetcode.com/problems/next-greater-node-in-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
注意，如果有重复出现的数字 [1,7,5,1,9,2,5,1] 后面的结果会覆盖前面的
因此要从后向前遍历
*/
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  const nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  const s = [];
  const ans = new Array(nums.length);

  // decending
  for (let i = nums.length - 1; i >= 0; i--) {
    while (s.length > 0 && s[s.length - 1] <= nums[i]) {
      s.pop();
    }
    ans[i] = s.length == 0 ? 0 : s[s.length - 1];
    s.push(nums[i]);
  }
  return ans;
};
