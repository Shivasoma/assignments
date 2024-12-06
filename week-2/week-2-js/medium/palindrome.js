/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const n = cleanedString.length

  for (i=0; i<(n/2); i++){
    if(cleanedString[i] != cleanedString[n-i-1]){
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
