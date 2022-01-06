/*
61. Rotate List


https://leetcode.com/problems/rotate-list/
*/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head == null || k == 0) return head;

  let p = head;

  // Get list length
  let length = 1;
  while (p.next) {
    p = p.next;
    length++;
  }

  p.next = head; // make a cycle
  // 现在，p是head的前一个node

  // rotate the list to the right by k places,意味着把最右的 k个 node砍下来，接到头上
  // step 表示 head 需要向尾部挪几次
  const step = length - (k % length);
  // find the cutting point
  for (let i = 0; i < step; i++) {
    p = p.next;
  }
  // p is the new tail
  head = p.next;
  p.next = null; // cut the cycle
  return head;
};
