/*
  The sort() method sorts the elements of an array in place
  The default sort order is ascending, built upon converting the elements into strings, 
  then comparing their sequences of UTF-16 code units values.
*/
const numbers = [1, 2, 3, 10, 100, 7, 4, 5, 6];

numbers.sort();
console.log("Sort by defalut as string", numbers); // [1, 10, 100, 2, 3, 4, 5, 6, 7 ]

/*
   Sorting by  number
*/
function compare(a, b) {
  return a - b;
}

numbers.sort(compare);
console.log("Sort as number", numbers); // [ 1, 2, 3, 4, 5, 6, 7, 10, 100 ]


/*
   Sort strings
*/
var names = ["Ana", "aba", "john", "John"];

names.sort(function (a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
});

console.log("Sorted string", names);
