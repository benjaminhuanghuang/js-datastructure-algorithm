/*
1328. Break a Palindrome

Medium

https://leetcode.com/problems/break-a-palindrome/

[Amazon]
*/
/*
  Brute force
  O(N * 26 * N)
*/

/*
  给定的string是palindrome，检查一半就可以了
  替换第一个不是a的字符，如果全是a，那就把最后一位换成b即可。
*/
/**
 * @param {string} palindrome
 * @return {string}
 */
 var breakPalindrome = function(palindrome) {
  if (palindrome.length == 1) return "";

  let change = false;
  const chArray = Array.from(palindrome);
  for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {
    if (change) break;
    if (chArray[i] != "a") {
      chArray[i] = "a";
      change = true;
    }
  }
  if (change) {
    return chArray.join('');
  } else {
    chArray[palindrome.length - 1] = "b";
    return chArray.join('');
  }  
};