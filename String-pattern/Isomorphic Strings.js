/*
205. Isomorphic Strings

https://leetcode.com/problems/isomorphic-strings/
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  const s2t = new Map() ; // chat to char
  const t2s = new Map() ; // chat to char
  for (let i = 0; i < s.length; i++)
  {
    if (s2t.has(s[i]) || t2s.has(t[i]))
    {
      if (s2t.get(s[i]) != t[i] || t2s.get(t[i]) != s[i])
      {
        return false;
      }
    }
    else
    {
      s2t[s[i]] = t[i];
      t2s[t[i]] = s[i];
    }
  }
  return true;
};