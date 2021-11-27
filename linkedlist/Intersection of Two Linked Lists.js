/*
160. Intersection of Two Linked Lists
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
维护两个指针，假设有一个相交结点P,
因为headA,headB，到达p的距离是不一样的，为了让他们的距离一样，可以在其中任何一个指针走到尾结点或者NULL时，指向对方的首地址。这样
粗略理解就是，因为某个链表首地址到相交点短一些，那么第一次先到，那么再让他从对方的首地址走，因为这个距离长些，走的多些，这一消一涨就弥补了
差距，也就是说，在两个指针都走了对方的路后，那么这个时刻以后，两个指针到相交结点的步数相同。


Time: 最坏情况是O(M+N)，空间复杂度上只需要维护两个指针即可
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pa = headA;
  let pb = headB;

  while (pa != pb) {
    if (!pa) {
      // pa 走到了 结尾
      pa = headB;
    }
    else {
      pa = pa.next;
    }

    if (!pb) {
      pb = headA;
    }
    else 
    {
      pb = pb.next;
    }
  }

  return pa;
};
