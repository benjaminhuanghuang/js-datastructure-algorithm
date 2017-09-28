var titleToNumber = function(s) {
  if (s == null || s.length == 0) return -1;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let digit = s.charCodeAt(i) - "A".charCodeAt(0) + 1;
    res = res * 26 + digit;
  }
  return res;
};

let res = titleToNumber('AB');
console.log(res);