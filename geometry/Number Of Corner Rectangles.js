/*
750. Number Of Corner Rectangles
[Google]

https://leetcode.com/problems/number-of-corner-rectangles/
*/

/*
https://www.youtube.com/watch?v=j_syny0MUuQ&ab_channel=EdwardShi

*/

var countCornerRectangles = function (grid) {
  let res = 0;
  for(let row1 = 0; row1 <grid.length-1; row1++ ){
    for(let row2 = i+1;row2 < grid.length; row2++ ){
      let count = 0;  // how many col 
      for(let col = 0;col < grid[0].length; col++ ){
        if(grid[row1][col] == 1 && grid[row2][col] ==1){
          count++;
        }
      }
      res += count * (count-1) / 2;
    }
  }
}