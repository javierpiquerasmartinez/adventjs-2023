
function findBalancedSegment(message) {
  let largestCombination = []
  for(let i = 0; i < message.length; i++) {
    for(let j = message.length; j > i; j--) {
      let segment = message.slice(i,j)
      if(
        segment.filter(
          bit => bit === 0).length === segment.filter(bit => bit === 1).length
        && (
          (j - 1) - i > largestCombination[1] - largestCombination[0]
          || largestCombination[0] === undefined
        )
      ){
        largestCombination[0] = i
        largestCombination[1] = j - 1
      }
    }
  }
  return largestCombination
}

module.exports = findBalancedSegment
