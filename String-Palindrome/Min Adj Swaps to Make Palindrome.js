/*

Microsoft | OA 2019 | Min Adj Swaps to Make Palindrome

https://leetcode.com/discuss/interview-question/351783/


Given a string, what is the minimum number of adjacent swaps required to convert a string into a palindrome. If not possible, return -1.

Example 1:

Input: "mamad"
Output: 3
Example 2:

Input: "asflkj"
Output: -1
Example 3:

Input: "aabb"
Output: 2
Example 4:

Input: "ntiin"
Output: 1
Explanation: swap 't' with 'i' => "nitin"
*/


/*
https://www.youtube.com/watch?v=fOpD3wdK0w8&ab_channel=AnishRao

*/


function palindrome(input) {
  let count = 0;
  for(let i =0 ; i < Math.floor(input.length/2); i++){
    let left = i, right = n - 1- i;

    while(right > left) {
       if(input[left] == input[right]) {
         break;
       }
       else {
          right --;
       }
    }

    for(let j = right; j < n-i-left; j--){
      const tmp = input[right];
      input[right] = input[right-1];
      input[right-1] = tmp;
    }
  }
}



let input = 'mamad'
console.log(palindrome(input));