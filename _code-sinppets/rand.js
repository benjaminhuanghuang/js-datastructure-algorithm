
Math.random();//  returns a random number between 0 (inclusive),  and 1 (exclusive):
// Function to generate random number 
function randomNumber(min, max) { 
  return Math.random() * (max - min) + min;
} 