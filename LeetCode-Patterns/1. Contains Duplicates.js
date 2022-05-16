// Parameter: Integer of Nums
// Returns: true if any value appears more than once, false if unique
// Examples: [1,1,2] return true [1,2,3] return false
// Pseudo: Check each index, if a match is found, return true, if it is not return false
let containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length -1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }     
    }
    return false
};