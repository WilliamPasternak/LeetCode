66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Iterate over digits array backwards
    let rightmostNumber = digits[i]
    for (let i = digits.length - 1; i >= 0; i --){    
    // If current element is <9, increment by 1, return array
        if (rightmostNumber < 9) {
            digits[i]++
            return digits
        } else {
            // if not, set to zero
            digits[i] = 0
        }
    } 
    // if we reach end of array add a 1 to the front with unshift.
    digits.unshift(1)
    return digits
};