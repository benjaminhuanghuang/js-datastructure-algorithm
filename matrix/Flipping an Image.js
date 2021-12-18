/*
832. Flipping an Image

 flip the image horizontally, then invert it,

 https://leetcode.com/problems/flipping-an-image/
*/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  if (image.length == 0) return image;

  const rows = image.length;
  const cols = image[0].length;

  for (let row = 0; row < rows; row++) {
    let l = 0;
    let r = cols - 1;
    while (l <= r) {
      let tmp = image[row][l] ^ 1;
      image[row][l] = image[row][r] ^ 1;
      image[row][r] = tmp;
      l++;
      r--;
    }
  }
  return image;
};
