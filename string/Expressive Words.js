/*

809. Expressive Words

Medium

https://leetcode.com/problems/expressive-words/

拉伸后的单词S，和一个单词数组，问里面有多少个单词可以拉伸成为S
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var expressiveWords = function(s, words) {
  let res = 0, len = s.length;
  for (const word of words)
  {
    let i = 0, j = 0; // S[i], word[j]
    for (; i < len; ++i)
    {
      if (j < word.length && s[i] == word[j])
        ++j;
      else if (i > 0 && s[i] == s[i - 1] && i + 1 < len && s[i] == s[i + 1])
        ++i;
      else if (!(i > 1 && s[i] == s[i - 1] && s[i] == s[i - 2]))
        break;
    }

    if (i == len && j == word.length)
      ++res;
  }
  return res;
};