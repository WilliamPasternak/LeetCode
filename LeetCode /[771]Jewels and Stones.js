/*You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/
 

function jewelCount(jewels, stones){
   const cache = {}
   for(let jewel of jewels){
       cache[jewel] = jewel
   }
   let jewelCount = 0
   for(let stone of stones){
   if(stone in cache) jewelCount++
}
  return jewelCount

}

// Tests:
console.log(jewelCount("aA","aAAbbbb"), '3')
console.log(jewelCount("z","ZZ"), '0')
