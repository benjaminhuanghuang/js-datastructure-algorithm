const { assert } = require("chai");
const lengthOfLongestSubstring = require("../leetcode/003.LongestSubstringWithoutRepeatingCharacters");

describe("3. Longest Substring Without Repeating Characters: ", () => {
  it(`return 3 from "abcabcbb"`, () => {
    const res = lengthOfLongestSubstring("abcabcbb");
    assert.equal(res, 3);
  });

  it(`return 2 from "cdd"`, () => {
    const res = lengthOfLongestSubstring("cdd");
    assert.equal(res, 2);
  });
});