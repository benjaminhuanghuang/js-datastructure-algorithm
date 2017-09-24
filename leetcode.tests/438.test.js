const { assert } = require("chai");
const findAnagrams = require("../leetcode/438.FindAllAnagramsInAString");

describe("438. Find All Anagrams in a String", () => {
  it(`return [0, 6] when s: "cbaebabacd" p: "abc"`, () => {
    const res = findAnagrams("cbaebabacd", "abc");
    assert.deepEqual(res,[0,6]);
  });
  
});