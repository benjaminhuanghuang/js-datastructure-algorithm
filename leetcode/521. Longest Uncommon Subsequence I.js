/*

*/
var findLUSlength = function(a, b) {
  let lenA = a.length;
  let lenB = b.length;
  if (lenA != lenB)
      return Math.max(lenA, lenB);
  else
  {
      if (a != b)
          return lenA;
      else
          return -1;
  }
};