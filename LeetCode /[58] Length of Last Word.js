58. Length of Last Word
https://leetcode.com/problems/length-of-last-word

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    const words = s.trim().split(' ')
    return words.pop().length
};