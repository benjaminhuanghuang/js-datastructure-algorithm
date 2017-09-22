var longestCommonPrefix = function(strs) {
  if (strs == null || strs.length == 0) return "";
  if (strs.length == 0) return strs[0];

  let ans = "";
  for(let i = 0; i < strs[0].length; i++)
  {
    for(let j = 1; j < strs.length ; j++)
    {
      if (strs[j][i] != strs[0][i])
        return ans;
    }
    ans += strs[0][i];
  }
  return ans;
};
