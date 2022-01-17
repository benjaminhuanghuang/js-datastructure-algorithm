/*
725. Split Linked List in Parts

Medium

https://leetcode.com/problems/split-linked-list-in-parts/


Split linked list to K groups

*/

/*
    https://www.youtube.com/watch?v=fk8JTWhM-4U&ab_channel=HuaHua
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  // 1. get length of the linked list
  let len = 0;
  for (let p = head; p != null; p = p.next) {
    len++;
  }

  const countInGroup = Math.floor(len / k);
  let r = len % k; // 有几个group，比别的group的长度大1
  let curr = head;
  let prev = null; // 需要把group中的最后一个node断开

  const ans = new Array(k);
  for (let i = 0; i < k; i++, --r) {
    ans[i] = curr;

    let part_len = countInGroup + (r > 0 ? 1 : 0);
    for (let j = 0; j < part_len; j++) {
      prev = curr;
      curr = curr.next;
    }
    if (prev != null) {
      prev.next = null;
    }
  }
  return ans;
};
