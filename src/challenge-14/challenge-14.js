
function maxGifts(houses) {
  let previous = 0
  let result = 0
  for (let i in houses) {
    let temp = previous + houses[i]
    previous = result
    result = temp > result ? temp : result
  }
  return result
}

module.exports = maxGifts
