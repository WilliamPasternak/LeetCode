Non Constructible Change
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e. vou can have multiple coins of the same value).
For example, if you're given coins = [1, 2, 5] , the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1 .


// Time: O(n logn) 
// Space: O(1) if sorting in place allowed
function nonConstructibleChange(coins) {
  
  // Sort coins in asc order. 
  coins.sort((a,b) => a - b)
  // Track total change created, loop through coins and update.
  let changeCreated = 0
    for(let coin of coins){
      if (coin > changeCreated + 1){
        return changeCreated + 1
      }
      changeCreated += coin
    }
  return changeCreated + 1;
}

// Time: O(n log n)
// Space: O(n) * Not sorting in place, O(1) if sorting in place allowed.
function nonConstructibleChange(coins) {
  // Sort coins
  let sortedCoins = coins.sort((a,b) => a - b)
  console.log(sortedCoins)
  // create count changeGiven
  let changeGiven = 0
  // iterate over coins
  for(let coin of sortedCoins){
  // if current coin > change given + 1 return change given + 1
    if(coin > changeGiven + 1){
      return changeGiven + 1
    }
    // Add Coin to changeGiven
    changeGiven += coin
  }
  return changeGiven + 1
}

