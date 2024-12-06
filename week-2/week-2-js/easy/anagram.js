/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  l1 = str1.length;
  l2 = str2.length;
  if (l1 == l2){
    s1 = str1.toLowerCase().split('').sort();
    s2 = str2.toLowerCase().split('').sort();
    if (JSON.stringify(s1)==JSON.stringify(s2)){
      return true;
    }
    return false;
  }
  else{
    return false;
  }

}

module.exports = isAnagram;
isAnagram('Debit Card', 'Bad Credit')