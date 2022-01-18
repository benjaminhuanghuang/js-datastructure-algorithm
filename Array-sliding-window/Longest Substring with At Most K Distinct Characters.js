/*
340. Longest Substring with At Most K Distinct Characters
 

https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
http://lixinchengdu.github.io/algorithmbook/leetcode/longest-substring-with-at-most-k-distinct-characters.html
*/

function lengthOfLongestSubstringKDistinct(s, k) {
  const charCount = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; ++right) {
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;
    if (Object.keys(charCount).length <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    } else {
      while (left <= right && Object.keys(charCount).length > k) {
        if (--charCount[s[left]] == 0) {
          charCount.delete(s[left]);
        }
        ++left;
      }
    }
  }

  return maxLen;
}
