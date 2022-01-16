/*
443. String Compression

https://leetcode.com/problems/string-compression/

return the new length of the array
*/


/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
  const  n = chars.length;
  let end = 0;
  for (let i = 1; i <= n; ++i)
  {
    let count = 1;
    while (i < n && chars[i] == chars[i - 1])
    {
      ++i;
      ++count;
    }
    chars[end++] = chars[i - 1]; // chars[p] = chars[i - 1], then p = p+1
    if (count == 1)
      continue;
    for (let c of count.toString())
    {
      chars[end++] = c;
    }
  }
  return end;
};