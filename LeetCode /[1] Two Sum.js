/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
    // Create an empty object to store indices of numbers encountered.
    const indices = {}
    // Loop through the array.
    for(let i = 0; i < nums.length; i++) {
        // If complementary number has been encountered already, return pair of indices
        if((target - nums[i]) in indices) {
            return [i, indices[target - nums[i]]]
        } 
        // Add current numbers index to indicies object
        indices[nums[i]] = i
    }
}