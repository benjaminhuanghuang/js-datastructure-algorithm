/*------------------------------------
The slice() method returns a shallow copy of a portion of an array into a new array object 
selected from [begin, end)
The original array will not be modified.
------------------------------------*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]


/*-----------------------------------
Test the shallow copy
------------------------------------*/
const students = [
  {
    name: 'Tom',
    age: 20
  },
  {
    name: 'Jack',
    age: 30
  },
  {
    name: 'Alen',
    age: 40
  },
];

const some = students.slice(1);
some[1].name = "changed!!!"

console.log("The original students", students)
