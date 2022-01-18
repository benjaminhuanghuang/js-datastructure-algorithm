// Process string
for (let c of t) {
  dict.set(c, 0);
}

// count chars in string
let close = [...s].reduce(function (prev, cur) {
  return prev + (cur == ")" ? 1 : 0);
}, 0);

// Process char
const char = str.charAt(0);
const asc = str.charCodeAt(0);

// Char <-> int
let char = String.fromCharCode((n % 26) + "A".charCodeAt(0));
const index = p.charCodeAt(i) % 26;

// replace str[i] with '9'
// substring [start, end)
str = str.substring(0, i - 1) + "9" + str.substring(i + 1);
str = str.substr(left, length);

// char array to string
new Array(5)
  .fill("9")
  .join("")(
    // include sub string
    goal + goal
  )
  .includes(s);

// is digit
const isdigit = (str) => {
  return str.charCodeAt(0) >= "0".charCodeAt(0) && str.charAt(0) <= "9".charCodeAt(0);
};

// list to string
const str = ["h", "e", "l", "l", "o"].join(""); // hello
const str = ["h", "e", "l", "l", "o"].join(); // h,e,l,l,o

// string <-> char array
const charArr = [...s];
const s = new String(charArr);

// Remove a char at index
const curr = s.slice(0, i) + s.slice(i + 1);
