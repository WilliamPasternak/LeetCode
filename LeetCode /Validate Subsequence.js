Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4] . Note that a single number in an array and the array itself are both valid subsequences of the array.


// While Loop, track 2 pointers:
// Time: O(n) | Space: O(1)
function isValidSubsequence(array, sequence) {
  let [arrIdx,seqIdx] = [0,0]
  while(arrIdx < array.length){
    if(array[arrIdx] === sequence[seqIdx]) seqIdx++
    arrIdx++    
  }
  return seqIdx === sequence.length
}

// Count # seen
// T: O(N) Space: O(1)
function isValidSubsequence(array, sequence) {
  let seqSeen = 0
  for(let idx = 0; idx < array.length; idx++){
    if(array[idx] === sequence[seqSeen]) seqSeen++
  }
return seqSeen === sequence.length
}

// For-of Loop, track 1 variable:
// Time: O(n) | Space: O(1)
function isValidSubsequence(array, sequence) {
  let sIdx = 0
  for(const num of array){
    if(sequence[sIdx] === num) sIdx++
  }
  return sIdx === sequence.length
}