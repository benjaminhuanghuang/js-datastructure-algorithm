/*
28. Implement strStr()

https://leetcode.com/problems/implement-strstr/
*/

/* --------------------------------------------
Solution KMP
Longest prefix suffix
https://www.youtube.com/watch?v=JoF0Z7nVSrA&ab_channel=NeetCode

Time complexity: O(m+n)
Space complexity: O(1)
----------------------------------------------*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // edge case: substring="" -> 0
  if (needle === "") return 0;
  const prefixTable = buildPrefixTable(needle);
  let i = 0; // location in string
  let j = 0; // location in substring
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      // if characters match, we can move to check next characters
      i += 1;
      j += 1;
    } else if (j > 0) {
      // when characters do not match, and we have a repeating
      // suffix-prefix pair, we still need to check after the prefix
      j = prefixTable[j - 1];
    } else {
      // if characters do no match, and no repetition, we can move on
      i += 1;
    }
  }
  return j === needle.length ? i - j : -1;
};

function buildPrefixTable(s) {
  const table = [0];
  let i = 1; // location in s
  let j = 0; // length of repeating prefix and suffix
  while (i < s.length) {
    // If characters match, then the repeating prefix-suffix pair
    // gets longer by 1 character
    if (s[i] === s[j]) {
      j += 1;
      table[i] = j;
      i += 1;
    } else if (j > 0) {
      // If the characters do no match, and we have repetition
      // in suffix and prefix, we still need to check
      // the character after the prefix
      j = table[j - 1];
    } else {
      // When the characters don't match and no repeating
      // suffix-prefix pair, then we can move on
      table[i] = 0;
      i += 1;
    }
  }
  return table;
}

/*
Brute force

Time complexity: O(mn)
Space complexity: O(1)
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const l1 = haystack.length();
  const l2 = needle.length();
  for (let i = 0; i <= l1 - l2; ++i) {
    let j = 0;
    while (j < l2 && haystack[i + j] == needle[j]) ++j;
    if (j == l2) return i;
  }
  return -1;
};
