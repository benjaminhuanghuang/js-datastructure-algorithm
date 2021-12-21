/*
121. Best Time to Buy and Sell Stock

Level: Easy

https://leetcode.com/problems/best-time-to-buy-and-sell-stock
*/

/*

https://www.youtube.com/watch?v=iTyEa35Ve-U&ab_channel=HuaHua

Find pair
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /*
    Return 
    1. Max profit in subarray price[0...i]
    2. Min price of prices[0...i]
  */
  const dp = (i) => {
    if (i < 0) {
      return [0, Number.MAX_SAFE_INTEGER];
    }
    let [max_profit, min_price] = dp(i - 1);
    return [Math.max(max_profit, prices[i] - min_price), Math.min(min_price, prices[i])];
  };

  return dp(prices.length - 1)[0];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};
