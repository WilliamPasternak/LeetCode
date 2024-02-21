**
 * Challenge: 14. Longest Common Prefix
 * Source: https://leetcode.com/problems/longest-common-prefix/description/
 * Description: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix (strs) {
    // Check if the input array is empty
    if (strs.length === 0) return ''

    // create an array to hold prefix
    const prefix = []
    // sort strs by length
    strs = strs.sort((strA, strB) => strA.length - strB.length);
    const shortestWord = strs[0]

    // Iterate over each character in the shortest word
    for(let i = 0; i < shortestWord.length; i++) {
        // Iterate over each word
        for(let j = 0; j < strs.length; j++) {
            // Check if the character at index i in all words matches
            if (shortestWord[i] !== strs[j][i]) {
                // If not, return the prefix found so far
                return prefix.join('')
            }
        }
        // If all characters at index i match, add the character to the prefix
        prefix.push(shortestWord[i])
    }
    // Return the longest common prefix found
    return prefix.join('')
}