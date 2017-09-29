var topKFrequent = function(nums, k) {
  let dict = {};
  for(num of nums)
  {
    if(num in dict)
    {
      dict[num]++;
    }
    else
      dcit[mum] = 1;
  }

  let bucket = new Array(nums.length + 1);
  for(num in dict)
  {
    let count = dict[numk];
    if(bucket[count] == null)
      bucket[count] = [];
    bucket[count].push(num);
  }

  let res =[];
  for(let i = bucket.length - 1; i >=0; i--)
  {
    if(bucket[i] !=null)
    {
      for(num in bucket[i])
      {
        if (res.length < k)
          res.push(num);
        else 
          return res;
      }
    }
  }
  return res;
};