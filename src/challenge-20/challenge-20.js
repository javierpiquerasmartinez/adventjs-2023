
function distributeGifts(weights) {
  let result = new Array(weights.length)
  for(let i = 0; i < weights.length; i++) {
    result[i] = new Array(weights[i].length).fill(0)
    result[i] = result[i].map((_, index) => {
      let res = weights[i][index] || 0
      let divideBy = weights[i][index] ? 1 : 0
      if(weights[i - 1]) {
        res += weights[i - 1][index]
        divideBy += (weights[i - 1][index]) ? 1 : 0
      } 
      if(weights[i + 1]) {
        res += weights[i + 1][index]
        divideBy += (weights[i + 1][index]) ? 1 : 0
      } 
      if(weights[i][index - 1]) {
        res += weights[i][index - 1]
        divideBy += (weights[i][index - 1]) ? 1 : 0
      } 
      if(weights[i][index + 1]) {
        res += weights[i][index + 1]
        divideBy += (weights[i][index + 1]) ? 1 : 0
      } 
      return Math.round(res / divideBy)
    })
  }
  return result
}

module.exports = distributeGifts
