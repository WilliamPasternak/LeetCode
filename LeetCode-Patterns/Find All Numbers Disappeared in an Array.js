448. Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


// Option 1:
function findDisappearedNumbers(nums) {  
    const seen = {}
    const dissapeared = []
    // Create a lookup of each number 1 - Nums.length setting each value to 0.
    for (let i = 1; i <= nums.length; i++){
        seen[i] = 0
    }
     // Loop over nums, Increment count.
    for(let num of nums){
        if(num in seen){
            seen[num]++
        }
    }
    // If number has been seen 0 times, push to new array.
    for(let num in seen){
        if(seen[num] === 0){
            dissapeared.push(num)
        }
    }
    return dissapeared
};


// Option 2:
function findDisappearedNumbers(nums) {  
   const seen = new Set(nums)
   const dissapeared = []
   
    for (let i = 1; i <= nums.length; i++){
       if (!seen.has(i)){
           dissapeared.push(i)
       }
    }
    return dissapeared
};





// Examples:
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]),'[5,6]')
console.log(findDisappearedNumbers([1,1]), '[2]')