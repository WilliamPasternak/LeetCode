/**
 * Challenge: 58. Length of Last Word
 * Source: https://leetcode.com/problems/length-of-last-word/
 * Description: Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
/**
/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord (str) {
 // Option 1: built in methods:   
    // Trim the input string to remove leading and trailing whitespace
    let string = str.trim()
    // Split the trimmed string into an array of words using a space (' ') as the delimiter
    let words = string.split(' ')
    // Retrieve the last word from the array of words
    let lastWord = words[words.length - 1]
    // Return the length of the last word
    return lastWord.length
}


/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(str) {
// Option 2: In place
    let lastWordLength = 0;
    let currentWordLength = 0;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        
        if (currentChar !== ' ') {
            currentWordLength++;
        } else {
            if (currentWordLength) {
                lastWordLength = currentWordLength;
            }
            currentWordLength = 0;
        }
    }
    
    // In case the last word is not followed by spaces
    if (currentWordLength) {
        lastWordLength = currentWordLength;
    }
    
    return lastWordLength;
}