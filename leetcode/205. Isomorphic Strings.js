/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s == null && t == null) return true;
  if (s == null || t == null) return false;
  if (s.length != t.length) return false;

  let len = s.length;
  let i = 0;
  // case "ab", "aa"
  let dictS = {};
  let dictT = {};
  while (i < len) {
    if (s[i] in dictS) {
      if (dictS[s[i]] != t[i]) 
        return false;
    } else {
      dictS[s[i]] = t[i];
    }
    if (t[i] in dictT) {
      if (dictT[t[i]] != s[i]) 
        return false;
    } else {
      dictT[t[i]] = s[i];
    }
    i++;
  }

  return true;
};
