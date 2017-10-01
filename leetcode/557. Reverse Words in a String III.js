/*
Note: In the string, each word is separated by single space and there will not be any 
extra space in the string.
*/

var reverseWords = function(s) {
  if(s == null || s.length == 0)
    return s;
  
  let charArr = s.split("");
  let wordStart = 0;
  let wordEnd = 0;
  let curr= 0;
  while(curr < s.length)
  {
    while(s[curr] != " " && curr < s.length)
    {
      curr++;
    }
    wordEnd = curr -1;
    swap(charArr, wordStart, wordEnd);
    wordStart = curr + 1;
    wordEnd = curr + 1;
    curr +=1;
  }

  return charArr.join("");
};

function swap(arr, i, j)
{
  while(i < j)
  {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

let input = "Let's take LeetCode contest";
let res = reverseWords(input);
console.log(res);


