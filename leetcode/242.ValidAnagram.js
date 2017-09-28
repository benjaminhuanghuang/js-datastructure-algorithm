var isAnagram = function(s, t) {
  if(s==null && t==null)
    return true;
  if(s==null || t==null)
    return false;
  if(s.length != t.length)
    return false;

  let dict = {};
  for (c of s)
  {
    if(c in dict)
      dict[c]++;
    else  
      dict[c] = 1;
  }

  for (c of t)
  {
    if(dict[c] < 1 || !(c in dict))
      return false;
    else
      dict[c] --;
  }
  return true;
};