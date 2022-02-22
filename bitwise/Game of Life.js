/*

289. Game of Life

Medium


https://leetcode.com/problems/game-of-life/


*/
/*

https://www.youtube.com/watch?v=fei4bJQdBUQ&ab_channel=NeetCode
 1: if live nei is 2 or 3
      1
    else
      0

  0: if live nei is 3
      1
    else
      0   

  original new state
   0        0    0
   1        0    1
   0        1    2
   1        1    3 

*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  const countLiveNeighbors = (r, c) => {
    let liveNei = 0;
    // count 8 nei
    for (let row = r - 1; row <= r + 1; row++) {
      for (let col = c - 1; col <= c + 1; col++) {
        if ((col == c && row == r) || col < 0 || row < 0 || col >= cols || row >= rows) {
          continue;
        }
        if (board[row][col] == 1 || board[row][col] == 3) {
          // check the state,
          liveNei++;
        }
      }
    }
    return liveNei;
  };

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      const nei = countNeighbors(r, c);
      if (board[r][c]) {
        if (nei == 2 || nei == 3) {
          board[r][c] = 3;
        }
      } else if (nei == 3) {
        board[r][c] = 2;
      }
    }
  }

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (board[r][c] == 1) {
        board[r][c] = 0;
      } else if (board[r][c] == 2 || board[r][c] == 3) {
        board[r][c] = 1;
      }
    }
  }
};
/*
  https://www.youtube.com/watch?v=juGxbF-eadU&ab_channel=HuaHua



*/
var gameOfLife = function (board) {
  const rows = board.length;
  const cols = board[0].length;
  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      let lives = 0;
      // Scan the 3x3 region including (j, i).
      // 注意越界
      for (let row = r - 1; row <= r + 1; row++) {
        for (let col = c - 1; col <= c + 1; col++) {
          // check 9 cells
          if (col < 0 || row < 0 || col >= cols || row >= rows) {
            continue;
          }
          // use the lowest bit to store the curr state
          lives += board[row][col] & 1;
        }
      }
      /*
       (livesNei== 2 && cell==1) || (livesNei==3 && cell==0) || (livesNei ==3 && cell ==1)
     */
      if (lives == 3 || lives - board[r][c] == 3) {
        // use the 2nd lowest bit to store the next state
        board[r][c] |= 0b10;
      }
    }
  }
  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      board[r][c] >>= 1;
    }
  }
};
