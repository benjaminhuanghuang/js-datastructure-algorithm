/*
  468. Validate IP Address

  https://leetcode.com/problems/validate-ip-address/
*/

/*
  Solution: Split and check each part
*/
/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  let isDigit = (c) => {
    return c == "0" || Number(c);
  };

  let isAlpha = (c) => {
    let ord = c.toLowerCase().charCodeAt(0);
    return 97 <= ord && ord <= 102; // [a-f]
  };
  let isNum = (s) => {
    return (s == "0" || (1 <= Number(s) && Number(s) <= 255 && s[0] != "0")) && s.split("").every((c) => isDigit(c));
  };

  let isHex = (s) => {
    return (
      1 <= s.length &&
      s.length <= 4 &&
      (Number(s) != NaN || parseInt(s, 16).toString(16) == s.toLowerCase()) &&
      s.split("").every((c) => isDigit(c) || isAlpha(c))
    );
  };
  // Main
  const IPv4 = IP.split(".").length == 4 && IP.split(".").every((s) => isNum(s));
  const IPv6 = IP.split(":").length == 8 && IP.split(":").every((s) => isHex(s));
  return IPv4 ? "IPv4" : IPv6 ? "IPv6" : "Neither";
};
