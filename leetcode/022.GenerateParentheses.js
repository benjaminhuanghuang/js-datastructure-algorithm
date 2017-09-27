
var generateParenthesis = function(n) {
  let res =[];
  if( n <=0)
    return res;
  parenthesisHelper(n, n, "", res);
  return res;
};

function parenthesisHelper(left, right, combination, res)
{
  if(left ==0 && right ==0)
  {
    res.push(combination);
    return;
  }
  if (left>0)
  {
    parenthesisHelper(left-1, right, combination+"(", res);
  }
  if ( right > left)
  {
    parenthesisHelper(left, right -1, combination+")", res);
  }
}

let res = generateParenthesis(3);
console.log(res);