/*
36. Valid Sudoku

https://leetcode.com/problems/valid-sudoku/

Medium
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  if (board == null || board.length != 9 || board[0].length != 9)
    return false;

  // check each column
  for (let i = 0; i < 9; i++)
  {
    const m = Array(9).fill(false);
    for (let j = 0; j < 9; j++)
    {
      if (board[i][j] != '.')
      {
        const index = parseInt(board[i][j] - '1');
        if (m[index])
        {
            console.log("col")
          return false;
        }
        m[index] = true;
      }
    }
  }

  //check each row
  for (let j = 0; j < 9; j++)
  {
   const m = Array(9).fill(false);
    for (let i = 0; i < 9; i++)
    {
      if (board[i][j] != '.')
      {
        const index = parseInt(board[i][j] - '1');  
        if (m[index])
        {
          console.log("row")  
          return false;
        }
        m[index] = true;
      }
    }
  }

  //check each 3*3 matrix
  for (let block = 0; block < 9; block++)
  {
    const m = Array(9).fill(false);
    for (let i = Math.floor(block / 3) * 3; i < Math.floor(block / 3) * 3 + 3; i++)
    {
      for (let j = block % 3 * 3; j < block % 3 * 3 + 3; j++)
      {
        if (board[i][j] != '.')
        {
          const index = parseInt(board[i][j] - '1');  
          if (m[index])
          {
              console.log("block", block)
            return false;
          }
          m[index] = true;
        }
      }
    }
  }

  return true;
};