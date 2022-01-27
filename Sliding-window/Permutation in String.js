/*
567. Permutation in String

Medium

https://leetcode.com/problems/permutation-in-string
*/

/*
  https://www.youtube.com/watch?v=wpq03MmEHIM
  https://www.youtube.com/watch?v=UbyhOgBN834&ab_channel=NeetCode

  Solution: Sliding Window

  Time Complexity: O(l1 + l2 * 26) = O(l1 + l2)

  Space Complexity: O(26 * 2) = O(1)
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;

  const counter = new Map(); // counter of chars in s1
  const window = new Map();

  for (const c of s1) counter.set(c, (counter.get(c) || 0) + 1);

  for (let i = 0; i < l2; ++i) {
    if (i >= l1) {
      window.set(s2[i - l1], window.get(s2[i - l1]) - 1);
    }
    window.set(s2[i], (window.get(s2[i]) || 0) + 1);

    // It is not easy to compare two map, so, it is better to use array instead of map
    if (counter == window) return true;
  }
  return false;
};

/*
  Solution: Sliding window + counter
*/
var checkInclusion = function (s1, s2) {
  var len1 = s1.length,
    len2 = s2.length;
  if (len1 > len2) return false;

  // ++ for s1, --for s2
  var count = Array(26).fill(0);

  // count the char in s1
  for (var i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  if (count.every((i) => i == 0)) return true;
  // sliding window in s2, start from len1
  for (var j = len1; j < len2; j++) {
    // -- for new char
    count[s2.charCodeAt(j) - "a".charCodeAt(0)]--;
    // ++ for the char out of sliding window
    count[s2.charCodeAt(j - len1) - "a".charCodeAt(0)]++;
    if (count.every((i) => i == 0)) return true;
  }

  return false;
};
