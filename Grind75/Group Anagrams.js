var groupAnagrams = function(strings) {
  
  let result = {};

  for (let word of strings) {   // for each word in provided strings
    const keys = new Array(26).fill(0);  // make an array of 26 0's. [0,0,...,0]
    for (let char of word) {    // for each character in current word.
      keys[char.charCodeAt(0) - 97] += 1; // Increase count of specific letter by ++ count at specific index.
    }
    
    if (!result[keys]) result[keys] = []; /* check if result object includes a key with the value of 'keys'. If not, 
    add a new entry to keys and set it to an empty array. 
    */
    result[keys].push(word); // Push the word onto the array that is the value of the keys entry in the result object.
  }
  return Object.values(result); // Return the arrays in result
}