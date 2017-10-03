/*
441. Arranging Coins
*/

var arrangeCoins = function(n) {
  let l =0;
  let r =n;
  while (l <= r)
  {
      let m = l + parseInt((r - l)/2);
      if(m * (m+1)/2 > n)
          r = m -1;
      else
      {
          l = m + 1;
      }
  }
  return r;
};