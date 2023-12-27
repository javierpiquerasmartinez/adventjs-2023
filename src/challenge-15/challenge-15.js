
function autonomousDrive(store, movements) {
  let robotI = [-1, -1]
  let storeTransformed = store.map((floor, index) => {
    let result = floor.split('')
    let position = result.indexOf('!')
    if(position > -1) {
      robotI = [index, position]
      result[index, position] = '.'
    } 
    return result
  })
  for(let move of movements) {
    if(move === 'R' && 
      storeTransformed[robotI[0]] && 
      storeTransformed[robotI[0]][robotI[1] + 1] === '.'){
      robotI[1]++
      continue
    }
    if(move === 'L' && 
      storeTransformed[robotI[0]] && 
      storeTransformed[robotI[0]][robotI[1] - 1] === '.') {
      robotI[1]--
      continue
    } 
    if(move === 'U' && 
      storeTransformed[robotI[0] - 1] && 
      storeTransformed[robotI[0] - 1][robotI[1]] === '.') {
      robotI[0]--
      continue
    }
    if(move === 'D'&& 
      storeTransformed[robotI[0] + 1] && 
      storeTransformed[robotI[0] + 1][robotI[1]] === '.') {
      robotI[0]++
      continue
    }
  }
  storeTransformed[robotI[0]][robotI[1]] = '!'
  storeTransformed = storeTransformed.map(floor => floor.join(''))
  return storeTransformed
}

module.exports = autonomousDrive
