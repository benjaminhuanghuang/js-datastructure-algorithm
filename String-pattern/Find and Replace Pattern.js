/*

890. Find and Replace Pattern

[Google]

https://leetcode.com/problems/find-and-replace-pattern/
*/

/*
  关键是如何定义match()
  记录每个char 第一次 出现的 position  比如 abb->011  mee->011
*/
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const ans = [];
  const getMapping = (w) => {
    let mapping = "";
    let charToIndex = {};
    for (let i = 0; i < w.length; i++) {
      const c = w.charAt(i);
      if (charToIndex[c] === undefined) {
        charToIndex[c] = i;
      }
      mapping += charToIndex[c];
    }
  };
  const pMapping = getMapping(pattern);
  for (const w of words) {
    const wMapping = getMapping(w);
    if (wMapping === pMapping) {
      ans.push(w);
    }
  }
  return ans;
};

/*
https://zxi.mytechroad.com/blog/string/leetcode-890-find-and-replace-pattern/

Remember the last pos of each char.
*/
var findAndReplacePattern = function (words, pattern) {
  const ans = [];
  const match = (w, p) => {
    const last_pos_w = new Array(128).fill(-1); // last pos of x in w
    const last_pos_p = new Array(128).fill(-1); // last pos of x in p
    for (let i = 0; i < w.size(); ++i)
      if (last_pos_w[w[i]] != last_pos_p[p[i]]) {
        return false;
      } else {
        last_pos_w[w[i]] = last_pos_p[p[i]] = i;
      }
    return true;
  };

  for (const w of words) {
    if (match(w, pattern)) {
      ans.push(w);
    }
  }
  return ans;
};
