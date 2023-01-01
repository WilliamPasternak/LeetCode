Binary Search
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

function search(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) { 
        if(elem < arr[middle]) end = middle - 1; 
        else start = middle + 1; 
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1; 
}