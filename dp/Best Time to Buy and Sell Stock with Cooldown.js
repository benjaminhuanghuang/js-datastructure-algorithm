/*
  309. Best Time to Buy and Sell Stock with Cooldown

  https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

  题目大意：给你每天的股价，没有交易次数限制，但是卖出后要休息一天才能再买进。问你最大收益是多少？
*/

/*
https://www.youtube.com/watch?v=xXIs_bF8lHE&t=396s&ab_channel=HuaHua


*/

var maxProfit = function (prices) {
   /*
    return 
    sold: max profit after sold without holding, can't buy, can't sell
    holdingg: max profit whith holding, Can't buy, can sell
    cooldown: max profit whith holding, Can buy, can't sell

   */
    const dp = () =>{
      if(i < 0) return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];

      const [sold, holding, cooldown] = dp(i-1)

      const a= holding + prices[i]; // sold
      const b = Math.max(holding, cooldown - prices[i]);  // do nothing, or buy
      const c = Math.max(cooldown, sold);

      return [a, b, c];
    }

    return Math.max(...dp(prices.lenngth -1));
};

/*

  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-309-best-time-to-buy-and-sell-stock-with-cooldown/
  
  
  Brute force:
    三种状态  buy, sell, cooldown/rest
    Time complexity: O(3^N)


  DP
    hold[i] = max(hold[i-1], rest[i-1]-prices[i])
    sold[i] = hold[i-1] + prices[i]
    rest[i] = max(rest[i-1], sold[i-1])
    
    Time complexity: O(n)

    Space complexity: O(1)
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sold = 0;
  let rest = 0;
  let hold = Number.MAX_SAFE_INTEGER;
  for (const price of prices) {
    let prev_sold = sold;
    sold = hold + price;
    hold = Math.max(hold, rest - price);
    rest = Math.max(rest, prev_sold);
  }
  return Maht.max(rest, sold);
};
