var toHex = function(num) {
  let res = "";
  // 有符号数右移， 左边会补上符号位
  for (let i = 0; num != 0 && i<8; ++i) 
  {
      let digit = num & 0xf;
      if (digit >= 10) 
          res = string.fromCharCode(digit - 10+ "a".charCodeAt(0) )+ res;
      else 
          res = string.fromCharCode(digit + "0".charCodeAt(0) ) + res;
      num >>= 4;
  }
  return res=="" ? "0" : res;
};