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
 var strStr = function(haystack, needle) {
  const l1 = haystack.length();
  const l2 = needle.length();
  for (let i = 0; i <= l1 - l2; ++i)
  {
    let j = 0;
    while (j < l2 && haystack[i + j] == needle[j])
      ++j; 
    if (j == l2)
      return i;
  }
  return -1;
};

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
 var strStr = function(haystack, needle) {
  const l1 = haystack.length();
  const l2 = needle.length();
  for (let i = 0; i <= l1 - l2; ++i)
  {
    let j = 0;
    while (j < l2 && haystack[i + j] == needle[j])
      ++j;
    if (j == l2)
      return i;
  }
  return -1;
};