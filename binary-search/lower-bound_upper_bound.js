/*
lower_bound
 lower_bound()在一个区间内进行二分查找，返回第一个大于等于目标值的位置（地址）
 

upper_bound
 upper_bound()与lower_bound()的主要区别在于前者返回第一个大于目标值的位置（地址）

 */

function lowerBound(x) {
  let l = 1,
    r = n;
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (x > g[mid]) l = mid + 1;
    else r = mid - 1;
  }
  return l;
}
function upperBound(x) {
  let l = 1,
    r = n;
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (x >= g[mid]) l = mid + 1;
    else r = mid - 1;
  }
  return l;
}
