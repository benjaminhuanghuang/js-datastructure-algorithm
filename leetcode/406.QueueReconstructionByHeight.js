
var reconstructQueue = function(people) {
  var result = [];

  // people[0] is height, people[1] is position
  // sort by height in desc and position in asc
  people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  console.log(people);

  for (var i = 0; i < people.length; i++) {
    result.splice(people[i][1], 0, people[i]);
    console.log(result);
  }
  return result;
};

let people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
reconstructQueue(people);


