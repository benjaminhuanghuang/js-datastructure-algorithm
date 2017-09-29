var countPrimes = function(n) {
  var isNotPrime = new Array(n).fill(false);
  
  for (var i = 2; i < n; i++)
  {
      // loop though 2 to n – 1, for each 1, times 2, 3..n would not be prime. 
      if (isNotPrime[i]) continue;
      var start = i + i;
      while (start < n)
      {
          isNotPrime[start] = true;
          start += i;
      }
  }
  let count = 0;
  for (var i = 2; i < n; i++)
  {
    if (!isNotPrime[i])
      count++;
  }
  return count;
};

let res = countPrimes(3);
console.log(res);