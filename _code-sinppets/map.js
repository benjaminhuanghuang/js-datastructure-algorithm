// Init map with values
const map = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);


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