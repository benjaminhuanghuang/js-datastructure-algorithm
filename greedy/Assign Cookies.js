/*
  455. Assign Cookies
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
  g.sort((a,b)=> a-b);
  s.sort((a,b)=> a-b);
  
  let i_g = g.size() - 1;
  let i_s = s.size() - 1;
  let ans = 0;
  while (i_g >= 0 && i_s >= 0)
  {
    if (s[i_s] >= g[i_g])
    {
      ans++;
      i_s--;
    }
    i_g--;
  }
  return ans;
};