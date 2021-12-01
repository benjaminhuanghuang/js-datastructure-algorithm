/*
  25. Reverse Nodes in k-Group
  https://leetcode.com/problems/reverse-nodes-in-k-group/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
  Solution: Two passes.

    First pass, get the length of the list.

    Second pass, swap in groups.

    Time complexity: O(n)
    Space complexity: O(1)
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k == 1) return head;

  const dummy = new ListNode(-1, head);

  // get length
  let len = 1;  // not 0
  while ((head = head.next)) len++;

  // reverse
  let pre = dummy;
  for (let l = 0; l + k <= len; l += k) {
    let cur = pre.next;
    let next = cur.next;
    for (let i = 1; i < k; ++i) {
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
      next = cur.next;
    }
    pre = cur;
  }
  return dummy.next;
};
