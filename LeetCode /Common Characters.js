Common Characters
Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignore duplicates.
Strings are not guaranteed to only contain alpha-numeric characters. 

// Option 1
function commonCharacters(strings) {
  const characterCounts = {}
  // Iterate over all strings
  for(const string of strings){
    // For each string, find the unique chars in that string
    const uniqueStringChars = new Set(string)
    // For each unique char, count if it appears (ignore duplicates)
    for(const char of uniqueStringChars){
      if(!(char in characterCounts)){
        characterCounts[char] = 0
      }
      characterCounts[char]++
    }
  }
  const sharedChars = []
  // Push chars whose count equals # of strings AKA they were in each.
  for(const [char,count] of Object.entries(characterCounts)){
    if(count === strings.length){
      sharedChars.push(char)
    }
  }
  return sharedChars
}


// Option 2.
function commonCharacters(strings) {
  // Find shortest string w/ helper function
  const shortestString = getSmallestString(strings)
  // Create set to hold unique characters
  let commonChars = new Set(shortestString)
  // Remove chars from set, not found in all words
  for(let i = 0; i < strings.length; i++){
    for(let char of commonChars){
      if(!strings[i].includes(char)){
        commonChars.delete(char)
      }
    }
  }
    return Array.from(commonChars)
}

function getSmallestString(strings){
  let shortestString = strings[0]
  for(const string of strings){
    if(string.length < shortestString.length){
      smallestString = string
    }
  }
  return shortestString
}

