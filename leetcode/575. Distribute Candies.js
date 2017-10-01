// Every body can get candies.length/2 candies: 

var distributeCandies = function(candies) {
  if (candies == null || candies.length == 0)
    return 0;
  let kinds = new Set(candies);
  return Math.min(kinds.size , candies.length / 2);
};