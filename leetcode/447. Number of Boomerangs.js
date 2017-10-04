/*
如果有n个点和a距离相等，那么排列方式为n(n-1)
*/

var numberOfBoomerangs = function(points) {
  let result = 0;
  // caculate distances between two points
  for(let i = 0; i< points.length; i++){
      let distances = {};
      for( let j = 0; j< points.length; j++){
          if(i == j){
              continue;
          }else{
              let dist = getDistance(points[i],points[j]);
              if(dist in distances)
              {
                distances[dist] ++;
              }
              else{
                distances[dist] = 1;
              }
          }
      }
      //如果有n个点和a距离相等，那么排列方式为n(n-1)
      for( key in distances){
          result += distances[key] * (distances[key] - 1);
      }
  }
  return result;
};

function getDistance(p1, p2){
  let x = p1[0] - p2[0];
  let y = p1[1] - p2[1];
  return x*x + y*y;
}