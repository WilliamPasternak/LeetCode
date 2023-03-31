First Non Repeating Character
Write a function that takes in a string of lowercase English-alphabet letters and returns the index ‹ the string's first non-repeating character.
The first non-repeating character is the first character in a string that occurs only once.
If the input string doesn't have any non-repeating characters, your function should return
- 1

// Time: O(N)  - 2 independent traversals.
// Space: O(1) - lookUp's max size is 26 as only lowercase English letters are used.
function firstNonRepeatingCharacter(string) {
  
  // Count character frequency in string
  const lookUp = {} 
  for(let char of string){
    lookUp[char] = lookUp[char] + 1 || 1
  }
  
  let allCharsRepeat = true
  let firstNonRepeatingChar

  // Find first character with a count of 1, 
  for(let char of string){
    if(lookUp[char] === 1){
      allCharsRepeat = false
      firstNonRepeatingChar = char
      break
    }
  }

  // If all chars repeat, return -1 OR the index of the first not repeating character
  return allCharsRepeat === true ? -1 : string.indexOf(firstNonRepeatingChar);
}