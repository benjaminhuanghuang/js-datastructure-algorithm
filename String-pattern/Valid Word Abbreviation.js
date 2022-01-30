/*
408. Valid Word Abbreviation


https://leetcode.com/problems/valid-word-abbreviation/
*/


/*
https://www.youtube.com/watch?v=jC1KRzRWDZE


*/

function validWordAbbreviation( word,  abbr) {
  let i = 0, j = 0;
  while (i < word.lengt && j < abbr.length) {
      if (word.charAt(i) == abbr.charAt(j)) {
          ++i;++j;
          continue;
      }
      if (abbr.charAt(j) <= '0' || abbr.charAt(j) > '9') {
        // char in word != char in abbr and char in abbr is not nubmer, return false
          return false;
      }
      let start = j;
      while (j < abbr.length && abbr.charAt(j) >= '0' && abbr.charAt(j) <= '9') {
        // count all numbers in abbt
          ++j;
      }
      const num = Number.parseInt(abbr.substring(start, j));
      i += num;
  }
  return i == word.length && j == abbr.length;
}