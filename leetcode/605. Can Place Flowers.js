/*
605. Can Place Flowers
*/

var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++){
    if (flowerbed[i] == 1) continue;
    // flowerbed[i] == 0
    if (i > 0 && flowerbed[i - 1] == 1) continue;
    if (i < flowerbed.length - 1 && flowerbed[i + 1] == 1) continue;

    flowerbed[i] = 1;
    n--;
  }

  return n <= 0;
};
