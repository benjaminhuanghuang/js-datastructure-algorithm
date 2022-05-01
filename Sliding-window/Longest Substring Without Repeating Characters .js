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
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  const lastOccurred = new Map();
  let maxLength = 0;

  for (let i = 0; i < s.length; ++i) {
    if (lastOccurred.has(s[i])) {
      // this char is already presented
      // lastOccurrd[ch] 不存在, or lastOccurrd[ch] < start: 无需操作
      // lastOccurrd[ch] >= start -> Update start
      // 为什么要用max？对于case "abba" 第二个b导致start = 2, 第二个a就不能使用第一个a的location + 1， 而要使用第二个b生成的start
      start = Math.max(start, lastOccurred.get(s[i]) + 1); // set start to max(start, lastOccurred[s[i]] + 1)
    }
    maxLength = Math.max(maxLength, i - start + 1); // if char is not presented, start is 0
    lastOccurred.set(s[i], i);
  }

  return maxLength;
};
