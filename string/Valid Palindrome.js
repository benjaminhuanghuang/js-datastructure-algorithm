/*
125. Valid Palindrome

https://leetcode.com/problems/valid-palindrome/


Easy
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;
  s = s.toLowerCase();
  while (l < r)
  {
    while (l < r && !alphanumeric(s[l]))
      ++l;
    while (l < r && !alphanumeric(s[r]))
      --r;
    if (s[l++] != s[r--])
      return false;
  }
  return true;
};

function alphanumeric(text) {
var letterNumber = /^[0-9a-zA-Z]+$/;
return text.match(letterNumber);
}