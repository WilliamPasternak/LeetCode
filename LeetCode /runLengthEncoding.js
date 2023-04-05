function runLengthEncoding(string) { 
  const encoding = []
  let [left,right] = [0,0]

  // Track currentLetter and currentCount of times it has occured so far.
  let currentLetter = string[0] 
  let currentCount = 0
  
  // Iterate over string with 2 pointers
  while(right < string.length){
    // If count is 9, break up the encoding. 
    if(currentCount === 9){
      encoding.push(currentCount)
      encoding.push(currentLetter)
      currentCount = 0
    }
    // While sequential chars are the same, increase count by 1
    else if(string[left] === string[right]){
      currentCount++
      right++
    }
    // If sequential chars are different, push count and letter. 
      // Move Left pointer forward, reset current letter
    else if(string[left] !== string[right]){
      encoding.push(currentCount)
      encoding.push(currentLetter)
      currentCount = 0
      left = right
      currentLetter = string[left]
    }
  }
  // Handle the last number and letter
      encoding.push(currentCount)
      encoding.push(currentLetter)

  return encoding.join('')
  
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
