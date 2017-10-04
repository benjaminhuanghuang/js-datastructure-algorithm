/*
 you are given positions of houses and heaters on a horizontal line, find out minimum 
 radius of heaters so that all houses could be covered by those heaters.
 */

/*
 升序排列加热器的坐标heaters

遍历房屋houses，记当前房屋坐标为house：

    利用二分查找，分别找到不大于house的最大加热器坐标left，以及不小于house的最小加热器坐标right
    
    则当前房屋所需的最小加热器半径radius = min(house - left, right - house)
    
    利用radius更新最终答案ans
*/
var findRadius = function(houses, heaters) {
  let radius = 0;
  heaters.sort((a, b) => a - b);
  for (house of houses) {
    radius = Math.max(radius, binarySearch(house, heaters));
  }
  return radius;
};

function binarySearch(val, heaters) {
  let start = 0;
  let end = heaters.length - 1;
  let diff = Number.MAX_SAFE_INTEGER;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (val < heaters[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  if (start > 0) {
    diff = Math.min(
      Math.abs(val - heaters[start]),
      Math.abs(val - heaters[start - 1])
    );
  }
  if (start < heaters.length - 1) {
    diff = Math.min(diff, Math.abs(val - heaters[start + 1]));
  }
  diff = Math.min(diff, Math.abs(val - heaters[start]));
  return diff;
}
