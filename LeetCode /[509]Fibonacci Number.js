509. Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. 
That is: F(0) = 0, F(1) = 1 and F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).


// Recursion:
function fib(n){
  if (n > 1) return fib(n-1) + fib(n-2)
  else if (n === 1) return 1
  else return 0
}

// Standard Loop:
function fibValue(n){
const fibArray = [0,1]
for(let i = 2; i <=n; i++){
   fibArray.push(fibArray[i-1] + fibArray[i-2]) 
}
return fibArray[fibArray.length - 1]
}



// Tests
console.log(fibValue(2), '1')
console.log(fibValue(3),'2')
console.log(fibValue(4), '3')