// Time: O(N) Space: O(K)
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