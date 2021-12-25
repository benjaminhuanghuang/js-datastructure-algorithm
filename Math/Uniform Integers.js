/*

https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=228269118726856

*/

function getUniformIntegerCountInInterval(A, B) {
  // Write your code here
   // 1. How many digits?
   // 2. 1 digit 9, 2 digits 11 to 99, 3 dights 111 to 999...
   // 3. longest one is limited by min digit: 110 , 120
   const countUniformNumbersBefore = (N)=>{
     const backup = N;
     if(N ==0)
       return 0;
     const str = N.toString();
     const digits = str.length;
     const leftDigit = parseInt(str[0]);

     let ans = 9*(digits-1) + leftDigit;


      for(let i = 1; i < digits ; i++)
      {
        
        if(parseInt(str[i]) < leftDigit && parseInt(str[i-1]) <= leftDigit){
          ans --;
          break;
        }
        if(parseInt(str[i]) > leftDigit){
          break;
        }
      }

     return ans;
   }
   return countUniformNumbersBefore(B) - countUniformNumbersBefore(A-1);
 }


/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 function getUniformIntegerCountInInterval3(A, B) {
  // Write your code here
   // 1. How many digits?
   // 2. 1 digit 9, 2 digits 11 to 99, 3 dights 111 to 999...
   // 3. longest one is limited by min digit
   const countUniformNumbersBefore = (N)=>{
     const backup = N;
     if(N ==0)
       return 0;
     let digits = 0;
     let leftDigit = 0;
     let minDigit = 9;
     let uniform = true;
     while (N>0){
        const digit = N % 10;
        minDigit = Math.min(minDigit, digit);
        leftDigit = digit;
        N = Math.floor(N / 10);
        digits ++;
     }
 
     let ans = 9*(digits-1);
     if(leftDigit >=minDigit)
     {
       ans += leftDigit;
     }
     else{
       ans += leftDigit -1;
     }
     if(!uniform)
      ans--;
     return ans;
   }
   return countUniformNumbersBefore(B) - countUniformNumbersBefore(A-1);
 }
//-- Time Limit Exceeded on 20 test cases

function getUniformIntegerCountInInterval2(A, B) {
  // Write your code here
  
  let count = 0
  for (let i = A; i <= B; i++) {
    const stringy = i.toString()
    const set = new Set()
    for (let ch of stringy) {
      set.add(ch)
    }
    if (set.size === 1) {
      count++
    }
  }
  return count;
}


for(let i =1; i < 10000000000; i ++)
{
  const a = getUniformIntegerCountInInterval(1, i);
  const b = getUniformIntegerCountInInterval2(1, i);
  if(a !== b){
    console.log(i, a, b);
    break;
  }
}

/*
let  a = getUniformIntegerCountInInterval(1, 6556);
console.log(a);

a = getUniformIntegerCountInInterval2(1, 6556);
console.log(a);
*/

/*
const countUniformNumbersBefore = (N)=>{
  if(N ==0)
    return 0;
  let digits = 0;
  let minDigit = 9;
  while (N>0){
     minDigit = Math.min(minDigit, N % 10);
     N = Math.floor(N / 10);
     digits ++;
  }

  let ans = 9*(digits-1) + minDigit;
  console.log( digits, minDigit, ans);
  return ans;
}

console.log(countUniformNumbersBefore(20));
*/