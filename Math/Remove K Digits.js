/*
402. Remove K Digits

Level: Medium

https://leetcode.com/problems/remove-k-digits
*/

/*
  https://www.youtube.com/watch?v=cFabMOnJaq0&ab_channel=NeetCode

  注意参数类型
*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
  if (k >= num.size())
  return "0";
let s = num;
let i, j;
for (i = 0; i < k; i++)
{
  j = 0;
  while (j < s.size() - 1)
  {
    if (s[j] > s[j + 1])
      break;
    j++;
  }
  s.erase(j, 1); // remove string at j, length = j + 1;
}
while (s.size() > 1 && s[0] == '0')
  s.erase(0, 1);
return s;
};