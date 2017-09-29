var topKFrequent = function(nums, k) {
  let dict = {};
  for(num of nums)
  {
    if(num in dict)
    {
      dict[num]++;
    }
    else
      dict[num] = 1;
  }
  
  let bucket = new Array(nums.length + 1);
  for(num in dict)
  {
    console.log(num);
    let count = dict[num];
    if(bucket[count] == null)
      bucket[count] = [];
    bucket[count].push(num);
  }
  
  let res =[];
  for(let i = bucket.length - 1; i >=0; i--)
  {
    if(bucket[i] !=null)
    { console.log(bucket[i]);
      for(num of bucket[i])
      {
        if (res.length < k)
          res.push(parseInt(num));
        else 
          return res;
      }
    }
  }
  return res;
};

let res = topKFrequent([1,1,1,2,2,3],2);
console.log(res);