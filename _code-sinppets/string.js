const c = str.charCodeAt(0)


// Char <-> int
let char = String.fromCharCode(n % 26 + "A".charCodeAt(0));


// replace str[i] with '9'
str = str.substring(0, i-1) + "9" + str.substring(i+1);


// char to string
new Array(5).fill("9").join("")