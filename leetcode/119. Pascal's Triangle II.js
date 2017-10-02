
var getRow = function(rowIndex) {
  if (rowIndex < 0 )
    return [];
  let res = new Array(rowIndex + 1);
  for (let row = 0; row <= rowIndex; row++)
  {                 
      for (let col = row  ; col >=0 ; col--)
      {
        res[col] = (col == 0 || col == row) ? 1 : res[col - 1] + res[col];
      }
  }
  return res;
};