/*
438. Find All Anagrams in a String

https://leetcode.com/problems/find-all-anagrams-in-a-string/
*/

/*
  用map或array记录sliding window中字符的个数
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = [];

  // the maps
  const p_count = new Array(26).fill(0);
  const s_count = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    const index = p.charCodeAt(i) % 26;
    p_count[index]++;
  }

  for (let i = 0; i < s.length; ++i) {
    const index = s.charCodeAt(i) % 26;
    s_count[index]++;

    if (i > p.length - 1) {
      // remove the char from sliding window
      const index = s.charCodeAt(i - p.length) % 26;
      s_count[index]--;
    }

    // check anagrams
    if (i >= p.length - 1) {
      if (p_count.every((val, i) => val === s_count[i])) {
        ans.push(i - p.length + 1);
      }
    }
  }
  return ans;
};
