14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


var longestCommonPrefix = function(strs) {
    // Sort array from shortest word to longest
    strs.sort((a,b) => a.length - b.length)
    // longest possible prefix is the length of the shortest word
    const charsInShortestWord = strs[0].length
    // Track number of matching letters
    let matchingLetters = 0
    const wordsToCheck = strs.slice(1)
   
    for (let i = 0; i < charsInShortestWord; i++) {
    const currChar = strs[0][i];
    for (let j = 0; j < wordsToCheck.length; j++) {
        if (wordsToCheck[j][i] !== currChar) {
            // Break the loop as soon as a character doesn't match
            return strs[0].slice(0, matchingLetters);
        }
    }
    matchingLetters++;
}
    // Return the portion of a word whose prefix is the same in all words
    return strs[0].slice(0,matchingLetters)
};
