
function getIndexsForPalindrome(word) {
  const checkPalindrome = (w) => {
    return w === w.split('').reverse().join('')
  }
  if(checkPalindrome(word)) return []
  
  for(let i = 0; i < word.length; i++) {
    for(let j = i; j < word.length; j++) {
      let wordArray = word.split('');
      [wordArray[i], wordArray[j]] = [wordArray[j] , wordArray[i]]
      if(checkPalindrome(wordArray.join(''))) return [i, j]
    }
  }
  return null
}

module.exports = getIndexsForPalindrome
