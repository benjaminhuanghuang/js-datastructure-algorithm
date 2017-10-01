var imageSmoother = function(M) {
  if(M == null || M.length == 0)
    return M;

  let rows = M.length;
  let cols = M[0].length;
  let ans = new Array();
  console.log(ans);
  for(let r =0 ;r < rows; r++)
    ans.push(new Array(cols).fill(0));
  console.log(ans);

  for( let r = 0; r< rows; r++)
  {
    for(let c = 0; c< cols ;c++)
    {
      let sum = 0;
      let count = 0;
      for( let k = r-1; k <= r+1; k++ )
      {
          for( let p = c - 1; p <= c+1; p++ )
          {
              if( k < 0 || p < 0 || k >= rows || p >= cols )
              {
                  continue;
              }
              sum += M[k][p];
              count++;
          }
      }
      ans[r][c] = parseInt(sum / count);
    }
  }
  return ans;
};
imageSmoother([[1,1,1],[1,0,1],[1,1,1]]);