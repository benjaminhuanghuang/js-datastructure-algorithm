const { assert } = require("chai");
const ValidPalindromeII = require("../leetcode/680.ValidPalindromeII");

describe("680. Valid Palindrome II", () => {
  it(`return true from "aba"`, () => {
    const res = ValidPalindromeII("aba");
    assert.isTrue(res);
  });
  it(`return true from "abca"`, () => {
    const res = ValidPalindromeII("abca");
    assert.isTrue(res);
  });
});