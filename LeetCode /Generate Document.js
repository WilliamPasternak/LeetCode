Generate Document

You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. 

Note: you can always generate an empty string ('')



function generateDocument(characters, document) {
// Frequency counter algorithmm
  // early exit and retrun true for ''
  if(document === '') return true
  
  // Build a hashtable to track frequency
  const lookup = {};
  // Add each item to firstStr or increment if present
  for (char of characters) {
     // lookup[first] = ((lookup[first] || 0 ) + 1);
     lookup[char] = lookup[char] + 1 || 1
  }
  // Check for secondStr values in lookup, decrement if present 
  for (char of document) {
    if (!lookup[char]) return false;
    lookup[char]--;
  }
  return true;
}