
var lengthOfLongestSubstring = function (s) {
  if (s == null || s.length === 0)
    return 0;

  let ans = 1;
  let start = 0;
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in dict) {
      // recalculate string len
      start = Math.max(start, dict[s[i]] + 1);
      dict[s[i]] = i;
    }
    else {
      dict[s[i]] = i;
    }
    ans = Math.max(ans, i - start + 1);
  }
  return ans;
};

module.exports = lengthOfLongestSubstring;