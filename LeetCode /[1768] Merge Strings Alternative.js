/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately (word1, word2) {
 // Create an array to hold characters
 const mergedStr = []
// Determine longest word
 const maxWordLength = Math.max(word1.length,word2.length)

// iterate over longest word
 for (let i = 0; i < maxWordLength; i++){
    if(word1[i]){
        mergedStr.push(word1[i])
    } if(word2[i]){
        mergedStr.push(word2[i])
    } 
 }
 // once interation is complete, return joined array.
 return mergedStr.join('')
}