/*
273. Integer to English Words

https://leetcode.com/problems/integer-to-english-words/
*/

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const postfix = ["", " Thousand", " Million", " Billion"];
  const num0To9 = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const num10To19 = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const num10To90 = ["Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  /*
  convert number < 1000
  case 1: n < 10
  case 2: 10 <= n <=19
  case 3: 20 <= n <= 99
    case 3.1 n 是 10的倍数
    case 3.2 n 不是 10的倍数， 要写成 Twnenty-Six
  case 4: n >= 100
    case 4.1 n 是 100的倍数
    case 4.2 n 可以被100 整除的部分 +  case 3
  */
  const convert = (num) => {
    if (num == 0) return "";

    if (num < 10) return num0To9[num];
    else if (num >= 10 && num <= 19) return num10To19[num - 10];
    else if (num >= 20 && num <= 99) {
      if (num % 10 == 0) return num10To90[Math.floor(num / 10) - 1];
      else {
        const s1 = num0To9[num % 10];
        const s2 = num10To90[Math.floor(num / 10) - 1];
        return s2 + "-" + s1;
      }
    } else {
      if (num % 100 == 0) return num0To9[Math.floor(num / 100)] + " Hundred";
      else {
        const temp = convert(num % 100);
        return convert(num - (num % 100)) + " " + temp;
      }
    }
  };

  if (num == 0) return "Zero";
  let res = "";
  let postfixIndex = 0;

  while (num > 0) {
    debugger
    let group = ""; // process 3 digit as group
    let cur = num % 1000; //process the last 3 digits
    let numberPart = convert(cur);
    if (numberPart == "") group = "";
    else group = numberPart + postfix[postfixIndex];

    //res[0] == ' ' happens when previous(lower) group is ""
    if (res.length != 0 && res.charAt(0) != " ") res = group + " " + res;
    else {
      res = group + res;
    }
    num = Math.floor(num / 1000); //drop 3 digits
    postfixIndex++;
  }
  return res;
};


console.log(numberToWords(14))