/*
535. Encode and Decode TinyURL

Level: Medium

https://leetcode.com/problems/encode-and-decode-tinyurl
*/

let codeDB = new Map() // code -> long url
let urlDB = new Map(); // long url -> code
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const getCode = () => {
  let code = new Array(6).fill()
      .map(_ => chars.charAt((Math.random() * 62)))
  return "http://tinyurl.com/" + code.join("")
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 var encode = function(longUrl) {
  if (urlDB.has(longUrl)) {
    return urlDB.get(longUrl);
  }
  let code = getCode()
  while (codeDB.has(code)){
    code = getCode();
  } 
  codeDB.set(code, longUrl)
  urlDB.set(longUrl, code)
  return code
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return codeDB.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */