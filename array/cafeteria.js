/*
Cafeteria

https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=203188678289677&source=career_site_application_submitted_sign_up_button
*/

/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
  // Write your code here
  S.sort((a, b) => a - b);

  let guests = 0;
  let start = 1;
  let range = null;

  for (const seatedDiner of S) {
    range = seatedDiner - start;
    guests += Math.floor(range / (K + 1));
    start = seatedDiner + K + 1;
  }

  range = N - S[S.length - 1];
  guests += Math.floor(range / (K + 1));

  return guests;
}
