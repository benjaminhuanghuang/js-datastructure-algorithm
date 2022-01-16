/*
848. Shifting Letters

Medium

https://leetcode.com/problems/shifting-letters/
*/
/*
  给出了一个字符串S，以及和这个字符串等长的数组shifts。
  
  shift操作：把某个字符在字母表上移动某位（字母’z’再向右移得到’a’）。
  现在遍历shifts，每个操作都是把"当前位数之前的所有字符"移动shift位。求最后得到的字符串。
  如果普通的遍历，在每次遍历的时候再把之前所有shift过的再次shift，那么就会超时。
  所以正确的做法是先求出每个字符串需要shift的次数。即对shifts进行位置之后的求和。得出要shift的位数之后，按照题目给的那种循环去操作就好了。
*/

/*
http://zxi.mytechroad.com/blog/string/leetcode-848-shifting-letters/
*/
/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let count = 0;
  const charArr = Array.from(s);
  for (let i = shifts.length - 1; i >= 0; --i) {
    count += shifts[i] % 26;
    charArr[i] = String.fromCharCode(((charArr[i].charCodeAt(0) - "a".charCodeAt(0) + count) % 26) + "a".charCodeAt(0));
  }
  return charArr.join("");
};
