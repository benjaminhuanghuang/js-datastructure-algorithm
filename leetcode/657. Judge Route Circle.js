var judgeCircle = function(moves) {
  if(moves == null || moves.length == 0)
    return true;
  let dict = {};
  for (move of moves)
  {
    let key = move;
    let val = 1;
    if(move == "D")
    {
      key = "U";
      val = -1;
    }
    if(move == "R")
    {
      key = "L";
      val = -1;
    }
    if (key in dict)
    {
      dict[key] += val;
    }
    else
    {
      dict[key] = val;
    }
  }
  return (("L" in dict && dict["L"] == 0) || !("L" in dict))
         && (("U" in dict && dict["U"] == 0) || !("U" in dict));
};