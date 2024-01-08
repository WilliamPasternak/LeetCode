/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} representing index of target number in nums.
 */
function search(nums, target) {
    // establish left & right indicies.
    let [leftIndex,rightIndex] = [0,nums.length -1]
    while(leftIndex <= rightIndex){
        // Establish middle index.
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(nums[middleIndex] === target) return middleIndex
        else if(target < nums[middleIndex]) rightIndex = middleIndex - 1
        else if(target > nums[middleIndex]) leftIndex = middleIndex  + 1
    }
    // if target was not found in nums.
    return -1
}   
// Tests
console.log(search([-1,0,3,5,9,12],9),4) // Target in nums at index 4.
console.log(search([-1,0,3,5,9,12],2),-1)  //  Target not in nums.
console.log(search([],5),-1)  // Empty array. Target not in nums.
console.log(search([7], 7), 0)  // Single element array. Target in nums at index 0.
