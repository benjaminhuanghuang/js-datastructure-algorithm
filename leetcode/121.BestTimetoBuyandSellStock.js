var maxProfit = function(prices) {
  if(prices == null || prices.length==0)
    return 0;

  let lowestPrice = prices[0];
  let maxProfit = 0;

  for(let i = 1 ; i < prices.length; i++)
  {
    let profit = prices[i] - lowestPrice;
    if(profit > maxProfit)
      maxProfit = profit;
    if(prices[i] < lowestPrice)
      lowestPrice = prices[i]; 
  }

  return maxProfit;
};

