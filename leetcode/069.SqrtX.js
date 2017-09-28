var mySqrt = function(x) {
  if (x < 2)
    return x;

  let low = 1;
  let high = Math.floor(x/2);
  let res = 0;
  while(low <= high) // for case x = 1
  {
    let mid = Math.floor((high + low)/2);
    if(mid * mid < x)
    {
      low = mid  +1;
      res = mid;
    }
    else if (mid * mid >x)   // mid is lower
    {
      high = mid - 1;
    }
    else
      return mid;
  }
  return res;
};
let res = mySqrt(3);
console.log(res);