var findTheDifference = function(s, t) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    ans ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    ans ^= t.charCodeAt(i);
  }
  console.log(ans);
  if(ans == 0)
    return "";
  return String.fromCharCode(ans);
};


let res= findTheDifference("abcd", "abcde");
console.log(res);