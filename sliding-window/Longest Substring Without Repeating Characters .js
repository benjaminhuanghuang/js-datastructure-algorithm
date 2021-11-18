/*
  3. Longest Substring Without Repeating Characters 

  https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

/*

Solution: HashTable + Sliding Window
Using a hashtable to remember the last index of every char.  And keep tracking the starting point of a valid substring.
start = max(start, last[s[i]] + 1)
ans = max(ans, i – start + 1)

Time complexity: O(n)
Space complexity: O(128)
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length();
  let start = 0;
  const lastOccurred = new Array(128).fill(-1);
  let maxLength = 0;

  for (let i = 0; i < n; ++i)
  {
    if (lastOccurred[s[i]] != -1) // this char is already presented
    {
      // lastOccurrd[ch] 不存在, or < start -> 无需操作
      // lastOccurrd[ch] >= start -> Update start
      start = Math.max(start, lastOccurred[s[i]] + 1);  // set start to max(start, lastOccurred[s[i]] + 1)
    }
    maxLength = Math.max(maxLength, i - start + 1); // if char is not presented, start is 0
    lastOccurred[s[i]] = i;
  }

  return maxLength;
};