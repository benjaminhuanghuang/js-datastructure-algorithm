// Init map with values
const map = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);


let romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Iteration
for (let key of map.keys()) {
	console.log(key);
}

for (let value of map.values()){
	console.log(value);
}


for (let [key, value] of  map.entries()) {
	console.log(key + " = " + value)
}

// Sort the keys
let keys = [... map.keys()]
keys.sort()


