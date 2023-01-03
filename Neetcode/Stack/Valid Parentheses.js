20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  const map = { '(': ')', '{': '}', '[': ']' };
  const stack = [];   
  for(const char of s){

  // Push opening bracket to stack
  if (char in map) stack.push(char);   

  // Check legend if last char in stack maps to the current char.
  else if (map[stack.pop()] !== char) return false;
  }
  
  // If stack has no length, Parentheses are valid.
  return !stack.length 
};