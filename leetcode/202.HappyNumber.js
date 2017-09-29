var isHappy = function(n) {
  let visited = {};
  let next = n;

  while (! (next in visited))
  {
      visited[next] = true;
      let num = next;
      next = 0;

      while (num != 0)
      {   
          let digit = num % 10;
          next += digit * digit;
          num = Math.floor(num/10);
      }

      if (next == 1) 
          return true;
  }

  return false;
};

let res = isHappy(1);
console.log(res);