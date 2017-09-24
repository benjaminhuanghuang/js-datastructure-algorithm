const { assert } = require("chai");
const { isPalindrome,reverseLinkedList } = require("../leetcode/234.PalindromeLinkedList");
const { buildList,getListValues } = require("./utilities");

describe("234. Palindrome Linked List", () => {
  it(`return false for [1,2]`, () => {
    let input = buildList([1,2]);
    const res = isPalindrome(input);
    assert.isFalse(res);
  });

  it(`return false for [1,0,0]`, () => {
    let input = buildList([1,0,0]);
    const res = isPalindrome(input);
    assert.isFalse(res);
  });

  it(`reverseLinkedList [1,2,4,5,6,7,8]`, () => {
    let input = buildList([1,2,4,5,6,7,8]);
    const res = reverseLinkedList(input, 3);
    const values = getListValues(res);
    assert.deepEqual(values, [8,7,6,5]);
  });

  it(`reverseLinkedList [1,2]`, () => {
    let input = buildList([1,2]);
    const res = reverseLinkedList(input, 1);
    const values = getListValues(res);
    assert.deepEqual(values, [2]);
  });

  it(`reverseLinkedList [1,0,0]`, () => {
    let input = buildList([1,0,0]);
    const res = reverseLinkedList(input, 2);
    const values = getListValues(res);
    assert.deepEqual(values, [0]);
  });
});
