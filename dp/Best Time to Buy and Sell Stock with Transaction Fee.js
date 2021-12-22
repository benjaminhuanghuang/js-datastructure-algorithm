/*
714. Best Time to Buy and Sell Stock with Transaction Fee

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
*/


/*
https://www.youtube.com/watch?v=xXIs_bF8lHE&t=396s&ab_channel=HuaHua
*/


/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
   /*
    return 
    sold: max profit afterr sold, without holding
    holdingg: max profit whith holding
   */
    const dp = (i) =>{
      if(i < 0) return [0, Number.MIN_SAFE_INTEGER];
      
      const [sold, holding] = dp(i-1);

      const a = Math.max(sold, holding + prices[i] - fee);   // do nothing or sell
      const b= Math.max(holding, sold-prices[i]);   // do nothing or buy

      return [a, b];
    }
    return dp(prices.length - 1);
};