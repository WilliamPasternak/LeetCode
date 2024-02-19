/**
 * Challenge: 121. Best Time to Buy and Sell Stock
 * Source: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Description: You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
/**
 * Finds the maximum profit that can be achieved by buying and selling stocks.
 * @param {number[]} prices - Array of stock prices.
 * @return {number} - Maximum profit.
 */
function maxProfit(prices) {
    // If there are fewer than 2 prices, no transaction is possible
    if (prices.length < 2) {
        return 0
    }
    
    // Initialize variables to track the lowest price seen so far and the maximum profit
    let [lowestPrice, maxProfit] = [prices[0], 0]
    
    // Iterate over the prices array starting from the second element
    for (let i = 1; i < prices.length; i++) {
        let nextPrice = prices[i]
        
        // Update maxProfit if the difference between the next price and the lowest price so far is greater
        if (nextPrice > lowestPrice && (nextPrice - lowestPrice) > maxProfit) {
            maxProfit = nextPrice - lowestPrice
        } 
        // Update lowestPrice if the next price is lower
        else if (nextPrice < lowestPrice) {
            lowestPrice = nextPrice
        }
    }
    
    // Return the maximum profit achieved
    return maxProfit
}