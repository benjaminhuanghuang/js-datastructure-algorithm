var intersection = function(nums1, nums2) {
  if ((nums1 == null || nums1.length == 0) || (nums2 == null || nums2.length == 0))
    return [];
  
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let res = [];
  let i1 = 0,
    i2 = 0;
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] == nums2[i2]) {
      if (res.length == 0 || res[res.length - 1] != nums1[ii]) {
        res.push(nums1[i1]);
      }
      i1++;
      i2++;
    } else if (nums1[i1] < nums2[i2]) {
      i1++;
    } else {
      i2++;
    }
  }
  return res;
};
