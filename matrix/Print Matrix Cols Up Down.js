/*
 Create matrix
  1 6 7 12 13
  2 5 8 11 14
  3 4 9 10 15
 */

function getMatrix(rows, cols) {
  for (let row = 0; row < rows; row++) {
    let firstCell;
    let line = "";

    for (let col = 0; col < cols; col++) {
      const dir = col % 2;
      let val;
      if (dir == 0) {
        // up to bottom
        firstCell = row;
        val = firstCell + rows * col;
      } else {
        //bottom to up
        firstCell = rows - row - 1; // 最重要
        val = firstCell + rows * col;
      }
      line += val + 1 + " ";
    }
    console.log(line);
  }
}

getMatrix(3, 5);
