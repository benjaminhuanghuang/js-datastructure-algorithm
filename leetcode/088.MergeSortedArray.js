var merge = function(nums1, m, nums2, n) {
  if (n <=0)
    return;
    
  let curr = nums1.length -1;
  let i1 = m-1;
  let i2 = n-1;
  while(i1 >=0 || i2>=0)  // The corner case: m = 0
  {
    var n1 = i1 >= 0 ? nums1[i1] : Number.MIN_SAFE_INTEGER;
    var n2 = i2 >= 0 ? nums2[i2] : Number.MIN_SAFE_INTEGER;

    if(n1>n2)
    {
      nums1[curr--] = n1;
      i1--;
    }
    else
    {
      nums1[curr--] = n2;
      i2--;
    }
  }
};