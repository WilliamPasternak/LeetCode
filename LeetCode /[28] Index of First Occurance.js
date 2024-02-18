/**
 * Challenge: 28. Find the Index of the First Occurrence in a String
 * Source: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
 * Description: Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
/**
 * Finds the index of the first occurrence of a substring in a string.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Initial Approach:
// Time Complexity: O(n * m) || Space Complexity: O(n)
function strStr(haystack, needle) {
    // create L & R pointers
    let [left,right] = [0,1]
    // while r < haystack.length
    while (right < haystack.length) {
         // begin 'building' words
         let inProgressWord = haystack.slice(left, right + 1)
         let inProgressNeedle = needle.slice(left, right + 1)

         if (inProgressWord === needle){
             return left
         }
         if (inProgressWord === inProgressNeedle) {
             right++
         }
         else {
             left = right
             right++
         }
    }
    return -1
}

// Optimized Approach:
// Time Complexity: O(n * m) || Space Complexity: O(1)
function strStr(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }

    return -1;
}