/*
  245. Shortest Word Distance III
  
  https://leetcode.com/problems/shortest-word-distance-iii/


  有重复单词
*/

var shortestDistance = function (words, word1, word2) {
  let res = words.length;
  let a = -1,
    b = -1,
    pre = -1;

  for (var i = 0; i < words.length; i++) {
    if (words[i].equals(word1)) a = i;
    if (words[i].equals(word2)) b = i;
    if (a != -1 && b != -1) {
      if (a != b) {
        min = Math.min(Math.abs(a - b), min);
      }
      else {
        if (pre != -1) {
          min = Math.min(Math.abs(i - pre), min);
        }
        pre = i;
        a = -1;
        b = -1;
      }
    }
  }

  return min;
};
