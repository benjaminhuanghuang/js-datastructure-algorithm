/*
455. Assign Cookies
*/

/*
Greed

时间复杂度: O(nlogn), 空间复杂度: O(1)
*/

var findContentChildren = function(g, s) {
  g.sort((a,b)=> a-b);   // O(glog(g))
  s.sort((a,b)=> a-b);   // O(glog(s))

  let i_greed = g.length - 1;
  let i_size = s.length - 1;
  let ans = 0;
  while(i_greed >=0 && i_size >=0)  // iterator all chidren
  {
      if (s[i_size] >= g[i_greed])
      {
          ans ++;
          i_size --;
      }
      i_greed--;           
  }
  return ans;
};