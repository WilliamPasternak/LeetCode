Kids With the Greatest Number of Candies

https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.





var kidsWithCandies = function(candies, extraCandies) {
    // create a variable holding greatest number of candies
    let maxCandies = 0
    
    // create an empty array 'results'
    const results = []
    
    // Identify greatest # of candies in candies array.
    for (let i = 0; i < candies.length; i++){
        if(candies[i] >= maxCandies){
            maxCandies = candies[i]
        }
    }
    // Push to results if current kid's candy + extraCandies > maxCandies
    for (let i = 0; i < candies.length; i++){
        results.push((candies[i] + extraCandies) >= maxCandies)
    }
    // after end is reached, return results
    return results
};