var isPerfectSquare = function(num) {
  if (num < 1) return false;
  if (num == 1) return true;

  let left = 0;
  let right = num / 2;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    let val = mid * mid;
    if (val == num) return true;
    else if (val > num) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};
