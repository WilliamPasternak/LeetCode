/**
 * Merges two strings alternately.
 * 
 * @param {string} word1 The first string to merge.
 * @param {string} word2 The second string to merge.
 * @returns {string} The merged string containing characters alternately from word1 and word2.
 */

function mergeAlternately(word1, word2) {
   // Determine longest word
   const longestWord = word1.length >= word2.length ? word1 : word2
   // Store characters in array.
   const alternatingCharacters = []
   // Iterate over longest word, alternate pushing characters.
   for (let i = 0; i < longestWord.length; i++){
       const [charFromWord1, charFromWord2] = [word1[i], word2[i]]
       // If there is still a character, push it to mergedCharacters array
       if (charFromWord1) mergedCharacters.push(charFromWord1)
       if (charFromWord2) mergedCharacters.push(charFromWord2)
   }
    // Join the characters array into a string
   const mergedString = alternatingCharacters.join('');
   // Return the merged string
   return mergedString;
}