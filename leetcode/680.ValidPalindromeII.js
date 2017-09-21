/*
680. Valid Palindrome II

*/


/*

*/
var validPalindrome = function (s) {
  if (s == null || s.length == 0)
    return false;

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
    }
    else {
      l++;
      r--;
    }
  }
  return true;
};

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l++] !== s[r--])
      return false;
  }
  return true;
}

module.exports = validPalindrome;

validPalindrome("abca");