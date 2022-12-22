You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices){
    let lowest = prices[0]
    let maxProfit = 0;

      for(let i = 1; i < prices.length; i++){
        if(prices[i] < lowest){
            lowest = prices[i]
        }
        if(prices[i] - lowest > maxProfit){
            maxProfit = prices[i] - lowest
        }
    }
    return maxProfit
}    

// Tests:
console.log(maxProfit([7,1,5,3,6,4]),'5')
console.log(maxProfit([7,6,4,3,1]),'0')