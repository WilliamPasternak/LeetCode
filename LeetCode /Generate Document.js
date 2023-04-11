Generate Document

// You're given a string of available characters and a string representing a document that you need to generate. 
// Write a function that determines if you can generate the document using the available characters. 
// If you can generate the document, your function should return true; otherwise, it should return false

// You're only able to generate the document if the frequency of unique characters in the characters string 
// is greater than or equal to the frequency of unique characters in the document string. 

// Option 1: Count frequencies of characters. Decrement count if found in document.
function generateDocument(characters, document) {
  // Build a hashtable to track frequency
  const characterCounts = {};
  // Add each char to lookup or increment if present
  for (char of characters) {
     characterCounts[char] = characterCounts[char] + 1 || 1
  }
  // Check for document chars in lookup, decrement if present 
  for (char of document) {
    if (!characterCounts[char]) return false;
    characterCounts[char]--;
  }
  return true;
}

// Option 2: Write a function to countCharFrequency. 
// For each character, compare the frequency value of document and chaacters provided
// if character occurs more times in document, it can't be generated

function generateDocument(characters, document){
  for(const character of document){
    const documentFrequency = countCharacterFrequency(character,document)
    const charactersFrequency = countCharacterFrequency(character,characters)
      if(documentFrequency > charactersFrequency) return false
  }
  return true
}

function countCharacterFrequency(character,target){
  let frequency = 0
  for (const char of target){
    if (char === character) frequency++
  }
  return frequency
}


// Option 3: Use a set to track numbers seen so we don't need to
// recheck dulicate letters.
function generateDocument(characters,document){
  const alreadyCounted = new Set()

  for(const character of document){
    if (character in alreadyCounted) continue

    const documentFrequency = countCharacterFrequency(character, document)
    const charactersFrequency = countCharacterFrequency(character, characters)
      if(documentFrequency > charactersFrequency) return false
    alreadyCounted.add(character)
  }
  return true
}

function countCharacterFrequency(character,target){
  let frequency = 0
  for (const char of target){
    if (char === character) frequency++
  }
  return frequency
}
