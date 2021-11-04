/*
  529. Minesweeper
*/

/*
  https://www.youtube.com/watch?v=UVrdP1CLDr4&ab_channel=happygirlzt
  M, E , B, Digit, X
  case 1: M -> X and return
  case 2: E -> count > 0
            -> count == 0:  B -> recursive()
*/

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const rows = board.length;
  const cols = board[0].length;

  const dfs = (x, y) => {
    if (board[y][x] != "E") return;
    // E:
    let count = 0;
    for (let tx = x - 1; tx <= x + 1; ++tx) {
      for (let ty = y - 1; ty <= y + 1; ++ty) {
        if (tx >= 0 && tx < cols && ty >= 0 && ty < rows) count += board[ty][tx] == "M";
      }
    }
    // find mine
    if (count > 0) {
      board[y][x] = count.toString();
      return;
    }

    board[y][x] = "B";

    for (let tx = x - 1; tx <= x + 1; ++tx) {
      for (let ty = y - 1; ty <= y + 1; ++ty) {
        if (tx >= 0 && tx < cols && ty >= 0 && ty < rows) dfs(tx, ty);
      }
    }
  };

  const x = click[1];
  const y = click[0];

  if (board[y][x] == "M") {
    board[y][x] = "X";
    return board;
  } else {
    dfs(x, y);
  }

  return board;
};
