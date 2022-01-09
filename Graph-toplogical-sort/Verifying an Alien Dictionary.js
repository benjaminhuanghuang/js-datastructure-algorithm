/*
953. Verifying an Alien Dictionary

Easy

https://leetcode.com/problems/verifying-an-alien-dictionary/

Sub problem of # 269. Alien Dictionary
*/

/*
https://www.youtube.com/watch?v=OVgPAJIyX6o&ab_channel=NeetCode
检查works 是否按照order 排序

*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const charIndex = new Map(); // char => index

  for (let i = 0; i < order.length; i++) {
    charIndex.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    for (let j = 0; j < w1.length; j++) {
      if (j == w2.length) {
        // w1.length > w2.length
        return false;
      }

      if (w1[j] != w2[j]) {
        if (charIndex.get(w2[j] < charIndex.get(w1[j]))) {
          return false;
        }
        break;
      }
    }
  }
  return true;
};
