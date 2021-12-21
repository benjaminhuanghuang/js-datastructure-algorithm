/*
122. Best Time to Buy and Sell Stock II

Level: Easy

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
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
    1. Max profit after i day, holding no stocks
    2. Max balance after i day, holding a stock
  */
  const dp = (i) => {
    if (i < 0) {
      return [0, Number.MIN_SAFE_INTEGER];
    }
    let [max_profit, max_balance] = dp(i - 1);
    return [
      Math.max(max_profit, max_balance + prices[i]), // do nothing / sell
      Math.max(max_balance, max_profit - prices[i]), // do nothing, buy
    ]; 
  };

  return dp(prices.length - 1)[0];
};
