/*
  buy[i]表示在第i天之前最后一个操作是买，此时的最大收益。
  sell[i]表示在第i天之前最后一个操作是卖，此时的最大收益。
  rest[i]表示在第i天之前最后一个操作是冷冻期，此时的最大收益。
  
  buy[i]  = max(rest[i-1] - price, buy[i-1]) 
  sell[i] = max(buy[i-1] + price, sell[i-1])
  rest[i] = max(sell[i-1], buy[i-1], rest[i-1])

  一个小技巧是如何保证[buy, rest, buy]的情况不会出现，这是由于buy[i] <= rest[i]， 
    即rest[i] = max(sell[i-1], rest[i-1])，这保证了[buy, rest, buy]不会出现。
  rest[i] = sell[i-1]
  将上面三个递推式精简到两个：
  buy[i]  = max(sell[i-2] - price, buy[i-1]) 
  sell[i] = max(buy[i-1] + price, sell[i-1])
*/

var maxProfit = function(prices) {
  if (prices == null || prices.length == 0) return 0;
  let len = prices.length;
  let buy = new Array(len + 2);
  let sell = new Array(len + 2);
  buy[0] = 0;
  buy[1] = 0;
  sell[0] = 0;
  sell[1] = 0;

  for (let i = 2; i < len + 2; i++) {
    buy[i]  = Math.max(sell[i-2] - prices[i-2], buy[i-1]) 
    sell[i] = Math.max(buy[i-1] + prices[i-2], sell[i-1])
  }
  return sell[len+1];
};

// based on solution 1, i only uses i-1 and i-2
var maxProfit_2 = function(prices) {
  if (prices == null || prices.length == 0) return 0;
  let buy = Number.MIN_SAFE_INTEGER,
    pre_buy = 0,
    sell = 0,
    pre_sell = 0;

  for (price of prices) {
    pre_buy = buy;
    buy = Math.max(pre_sell - price, pre_buy);
    pre_sell = sell;
    sell = Math.max(pre_buy + price, pre_sell);
  }
  return sell;
};
