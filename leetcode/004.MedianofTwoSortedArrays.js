var findMedianSortedArrays = function(nums1, nums2) {
  if ((nums1 == null || nums1.length ==0) && (nums2 == null || nums2.length ==0))
  {
    throw 'invalid input';
  }

  let length = nums1.Length + nums2.Length;
  if (length %2 == 1)
  {
      return this.GetKthNum(nums1, 0,nums2, 0, length/2+1);
  }
  else
  {
      return (this.GetKthNum(nums1, 0, nums2, 0, length/2) + this.GetKthNum(nums1, 0, nums2, 0, length/2+1)) / 2.0 ;
  }
};

function  GetKthNum(nums1, start1, nums2, start2, k)
{

}

module.exports = findMedianSortedArrays;


function test()
{
  try{
    findMedianSortedArrays(null, null);
  }
  catch(e){
    console.log(e);
  }
}
test();