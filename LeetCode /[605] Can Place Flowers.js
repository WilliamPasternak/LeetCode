605. Can Place Flowers
https://leetcode.com/problems/can-place-flowers/

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

function canPlaceFlowers(flowerbed, n) {
    let remainingFlowers = n;
    // Add empty plots to beginning and end to avoid needing edge cases for literal edges
    flowerbed.unshift(0)
    flowerbed.push(0)
    
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] + flowerbed[i - 1] + flowerbed[i + 1] === 0 ){
            flowerbed[i] = 1;
            remainingFlowers--;
        }
        // Exit if all flowers planted
        if (remainingFlowers <= 0) {
            return true; 
        }
    }
    return remainingFlowers <= 0;
}