/*
541. Reverse String II

Given a string and an integer k, you need to reverse the first k characters for 
every 2k characters counting from the start of the string. If there are less than k 
characters left, reverse all of them. If there are less than 2k but greater than or 
equal to k characters, then reverse the first k characters and left the other as 
original.
*/

var reverseStr = function(s, k) {
  let charArray = s.split("");
  let start = 0;
  while(start < s.length)
  {
    let end = Math.min(start+ k -1, s.length-1);
    swap(charArray, start, end);
    start = start + 2*k;
  }

  return charArray.join("");
};

function swap(arr, i , j)
{
  while (i < j)
  {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

let res = reverseStr("abcdefg" , 2);
console.log(res);