/*
1231. Divide Chocolate

Hard

https://leetcode.com/problems/divide-chocolate/
https://curiouschild.github.io/leetcode/2019/06/21/divide-chocolate.html

[Google]
*/
/*
  k is the cuts
*/

function maximizeSweetness(sweetness, k) {
  let total = sweetness.reduce((sum, s) => sum + s);

  let l = 0;
  let r = total;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    let cut = 0;
    let curr = 0;
    for (const s of sweetness) {
      curr += s;
      if (curr >= m) {
        curr = 0;
        cut++;
        if (cut > k) {
          break;
        }
      }
      if (cut > k) {
        l = m + 1;
      } else {
        l = m;
      }
    }
  }
  return l - 1;
}
function canSplit(sweetness, m, target) {
  let sum = 0,
    cnt = 0;
  for (const n of sweetness) {
    if (sum + n >= target) {
      sum = 0;
      cnt++;
    } else {
      sum += n;
    }
  }
  return cnt >= m;
}
