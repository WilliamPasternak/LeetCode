/**
 * @param {number[]} prices - Prices of a stock on each day
 * @return {number} - Maximum profit gained by buying and selling a stock.
 */

function maxProfit(prices) {
    // Initialize pointers (left and right) and maximum profit.
    let [left, right, maxProfit] = [0, 1, 0]
    // Iterate through the prices array 
    while (right < prices.length){
        // Check if the current price is less than or equal to the buy price.
        const lowerBuyPriceFound = prices[right] <= prices[left]
        // If a lower buy price is found, move the left pointer to the current position
        if (lowerBuyPriceFound) {
            left = right
        }
        // Establish the sell price and buy price for the current iteration.
        const [sellPrice, buyPrice] = [prices[right], prices[left]]

        // Calculate the current profit using the buy and sell prices
        const currentProfit = sellPrice - buyPrice

        // Update the maximum profit with the larger of the current profit and the existing maxProfit
        maxProfit = Math.max(maxProfit, currentProfit)

        // Move the right pointer forward.
        right++
    }

    // Return the final maximum profit
    return maxProfit
}
// Tests:
console.log(maxProfit([7,1,5,3,6,4]),5)
console.log(maxProfit([7,6,4,3,1]),0)