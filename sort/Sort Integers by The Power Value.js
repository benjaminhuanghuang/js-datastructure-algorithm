/*
1387. Sort Integers by The Power Value

Level: Medium

https://leetcode.com/problems/sort-integers-by-the-power-value
*/

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
 var getKth = function(lo, hi, k) {
  const vals = [];

  for (let n = lo; n <= hi; ++n)
  {
    let p = 0;
    let x = n;
    while (x != 1)
    {
      if (x & 1)
        x = 3 * x + 1;
      else
        x /= 2;
      ++p;
    }
    vals.push([p, n]);
  }
  /*
    nth_element仅排序第n个元素（从0开始索引），即将位置n（从0开始）的元素放在第n大的位置，
    处理完之后，默认排在它前面的元素都不比它大，排在它后面的元素都不比它小。
  */
  // nth_element(begin(vals), begin(vals) + k - 1, end(vals));
  vals.sort((a, b)=> a[0] - b[0]);
  return vals[k - 1][1];
};