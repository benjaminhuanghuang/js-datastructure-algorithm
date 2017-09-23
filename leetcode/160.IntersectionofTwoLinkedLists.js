function ListNode(val) {
  this.val = val;
  this.next = null;
}
var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) return null;

  let lenA = 0;
  let p = headA;
  while (p) {
    leanA++;
    p = p.next;
  }

  let lenB = 0;
  let p = headB;
  while (p) {
    lenB++;
    p = p.next;
  }

  let pA = lenA > lenB ? headA : headB;
  let pB = lenA > lenB ? headB : headA;
  let diff = Math.abs(lenA - lenB);
  while (diff > 0) {
    pA = pA.next;
    diff--;
  }

  while (pA && pB) {
    if (pA == pB) {
      return pA;
    }
    pA = pA.next;
    pB = pB.next;
  }
  return null;
};
