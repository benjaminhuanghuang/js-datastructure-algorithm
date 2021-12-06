/*
28. Implement strStr()
https://leetcode.com/problems/implement-strstr/
*/
/*
Time complexity: O(mn)

Space complexity: O(1)
*/
var strStr = function (haystack, needle) {
  if (needle == null || needle.length == 0) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] != needle[j]) break;
      if (j == needle.length - 1) return i;
    }
  }
  return -1;
};

console.log(strStr("a", "a"));
