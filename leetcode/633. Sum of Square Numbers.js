/*
双指针，end最大为c开根号，begin最小为0. 判断当前begin和end是否满足，然后相应移动beg或者end
*/

var judgeSquareSum = function(c) {
  let begin = 0;
  let end = parseInt(Math.sqrt(c));
  while (begin <= end) {
    let target = begin * begin + end * end;
    if (target > c) {
      end--;
    } else if (target < c) {
      begin++;
    } else {
      return true;
    }
  }
  return false;
};
