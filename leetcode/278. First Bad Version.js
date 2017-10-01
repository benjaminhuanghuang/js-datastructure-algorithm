isBadVersion = function(version) {
  return version == 2;
};


var solution = function(isBadVersion) {
  return function(n) {
      let low = 1;
      let high = n;

      while(low < high)
      {
        let mid = parseInt((low + high)/2);
        if (isBadVersion(mid))
        {
          high = mid;
        }
        else{
          low = mid + 1;
        }
      }
      return high;
  };
};

let res = new solution(isBadVersion)(2);
console.log(res);