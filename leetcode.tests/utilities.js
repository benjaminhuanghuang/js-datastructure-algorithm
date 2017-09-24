function ListNode(val) {
  this.val = val;
  this.next = null;
}
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

function getListValues(head) {
  if (head == null) return;
  let values = [];
  while (head != null) {
    values.push(head.val);
    head = head.next;
  }
  return values;
}

function printList(head) {
  values = getListValues(head);
  console.log(values);
  // console.log(...values);
}
module.exports = { buildList, printList, getListValues };

let list = buildList([2, 6, 8]);

printList(list);
