
function revealSabotage(store) {
  let result = []
  for(let i = 0; i < store.length; i++) {
    result[i] = new Array(store[i].length).fill(0)
    for(let j = 0; j < store[i].length; j++) {
      if(store[i][j] === '*') {
        result[i][j] = '*'
        continue
      }
      if(store[i-1] && store[i-1][j-1] === '*') {
        result[i][j]++
      }
      if(store[i-1] && store[i-1][j] === '*') {
        result[i][j]++
      }
      if(store[i-1] && store[i-1][j+1] === '*') {
        result[i][j]++
      }
      if(store[i][j-1] === '*') {
        result[i][j]++
      }
      if(store[i][j+1] === '*') {
        result[i][j]++
      }
      if(store[i+1] && store[i+1][j-1] === '*') {
        result[i][j]++
      }
      if(store[i+1] && store[i+1][j] === '*') {
        result[i][j]++
      }
      if(store[i+1] && store[i+1][j+1] === '*') {
        result[i][j]++
      }
      result[i][j] = result[i][j] === 0 ? ' ' : result[i][j].toString()
    }
  }
  return result
}

module.exports = revealSabotage
