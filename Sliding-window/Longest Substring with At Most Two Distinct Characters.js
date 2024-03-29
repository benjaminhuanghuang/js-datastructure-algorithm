/*
159. Longest Substring with At Most Two Distinct Characters	


https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

Given a string, find the length of the longest substring T that contains at most 2 distinct characters.

Example: 
Given s = “eceba”,
T is "ece" which its length is 3.
*/

function lengthOfLongestSubstringTwoDistinct(s) {
  if (s == null || s.length == 0) {
    return 0;
  }

  const n = s.length;
  const count = new Map();
  let longest = 0;
  let left = 0;

  for (let i = 0; i < n; i++) {
    count.set(s[i], count.get(s[i]) || 0 + 1);
    while (count.size() > 2) {
      count.set(s[left], count.get(s[left]) - 1);
      if (count.get(s[left]) == 0) {
        count.remove(s[left]);
      }
      left++;
    }
    longest = Math.max(longest, i - left + 1);
  }
  return longest;
}
