/*
168. Excel Sheet Column Title

*/


/*
  0 - 9
  a - z
*/

var convertToTitle = function(n) {
  if (n < 1) return "";
  let res = "";

  while (n > 0) {
    let digit = (n-1) % 26;
    n = parseInt((n-1) / 26);
    let char = String.fromCharCode(digit+ "A".charCodeAt(0));
    res = char + res;
  }
  return res;
};
