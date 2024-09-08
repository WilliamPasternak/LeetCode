392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

var isSubsequence = function(s, t) {
    // create 2 pointers starting at 0
    let [left,right] = [0,0]
    // Iterate over str 't'
    while (right <= t.length) {
        if (left >= s.length) {
            return true
        }
        // If character in left, is found in right, advance pointers
        if (s[left] === t[right]){
            left++
            right++
        }
        // If character is not found, advance right pointer only.
        else {
            right++
        }
    }
    // If right pointer advances past length of str 't' return false.
    return false
};