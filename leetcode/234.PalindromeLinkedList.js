/**
 * 234. Palindrome Linked List
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var isPalindrome = function(head) {
  if (head == null) return true;
  const linkLength = getLinkLength(head);
  //let count = linkLength % 2 ? linkLength / 2 + 1 : linkLength / 2;
  let count = Math.ceil(linkLength / 2 );
  const half = reverseLinkedList(head, count);

  while (head && half) {
    if (head.val != half.val) return false;
    head = head.next;
    half = half.next;
  }
  return true;
};

function getLinkLength(head) {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
}

function reverseLinkedList(head, startIndex) {
  let halfHeader = head;
  while (startIndex > 0 && halfHeader) {
    halfHeader = halfHeader.next;
    startIndex--;
  }

  let prev = null;
  while (halfHeader) {
    let next = halfHeader.next;
    halfHeader.next = prev;
    prev = halfHeader;
    halfHeader = next;
  }
  return prev;
}

module.exports = { isPalindrome, reverseLinkedList };

function buildList(nums) {
  if (nums == null || nums.length == 0) {
    return null;
  }
  let dummyHeader = new ListNode(-1);
  let curr = dummyHeader;
  for (num of nums) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return dummyHeader.next;
}

let input = buildList([1,0,0]);
res = isPalindrome(input);

console.log(3/2);