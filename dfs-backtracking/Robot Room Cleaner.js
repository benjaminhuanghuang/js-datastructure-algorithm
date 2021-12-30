/*
489. Robot Room Cleaner

[Google]

https://leetcode.com/problems/robot-room-cleaner/

Design an algorithm to clean the entire room using only the 4 given APIs shown below.
*/
/*
  Solution: DFS 

*/
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  const visited = new Map();

  const dfs = (row, col, curDir) => {
    if (visited.has(row + "," + col)) {
      return;
    }
    robot.lean();
    visited.set(row + "," + col, true);
    for (let d = 0; d < 4; d++) {
      if (robot.move()) {
        let nRow = row,
          nCol = Col;
        // calulat
        switch (currDir) {
          case 0:
            nRow = row - 1;
            break;
          case 90:
            nCol = col + 1;
            break;
          case 180:
            nRow = row + 1;
            break;
          case 270:
            nCol = col - 1;
            break;
          default:
            break;
        }

        dfs(nRow, nCol, currDir);

        //  go back
        robot.turnLeft();
        robot.turnLeft();
        robot.move();
        robot.turnRight();
        robot.turnRight();
      }
      robot.turnRight();
      curDir += 90;
      curDit %= 360;
    }
  };

  // 0 up, 90 right, 180 down, 270 left
  dfs(0, 0, 0);
};
