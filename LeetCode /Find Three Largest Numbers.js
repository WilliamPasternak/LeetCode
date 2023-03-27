Find Three Largest Numbers

Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.
The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12]

function findThreeLargestNumbers(array) {
  let [third,second,first] = [-Infinity,-Infinity,-Infinity]
  for(let currentNum of array){
    // Establish previous values
    let [prev1,prev2] = [first,second]
    // Check current num against largest, shift other nums if needed
    if(currentNum >= first){
      first = currentNum
      second = prev1
      third = prev2
    }
   // Check current num against second largest, shift other nums if needed
    else if(currentNum >= second){
       second = currentNum
       third = prev2
    }
    // Check current num against 3rd largest, no need to shift.
    else if(currentNum > third){
      third = currentNum
    }
  }
  return [third,second,first]
}