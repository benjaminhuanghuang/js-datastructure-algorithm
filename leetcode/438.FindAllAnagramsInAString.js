/**
 * 438. Find All Anagrams in a String
 */

/*
  dict记录要凑成目标字符串p的anagram，各字符分别缺多少个
  rest记录凑成目标字符串p一共还缺多少个字符
 */
var findAnagrams = function(s, p) {
  if (s == null || s.length == 0 || p == null || p.length == 0) return [];

  let res = [];
  let dict = {};
  let patternLength = p.length;
  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    if (char in dict) dict[char]++;
    else dict[char] = 1;
  }

  let rest = patternLength;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // if dict contains current char
    if (dict[char] >= 1) rest--;
    dict[char]--;

    if (i >= patternLength) { 
      // recover the dict after checking
      let charOutOfWindow = s[i - patternLength];
      if (charOutOfWindow in dict) {
        if (dict[charOutOfWindow] >= 0) 
          rest++;  // recover the rest value
        dict[charOutOfWindow] += 1;
      }
    }
    if (rest == 0)
      // add the start index of anagram into result
      res.push(i - patternLength + 1);
  }

  return res;
};


module.exports = findAnagrams;

const res = findAnagrams("cbaebabacd", "abc");