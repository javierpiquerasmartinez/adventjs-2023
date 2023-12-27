
function maxDistance(movements) {
  const result = Math.abs(
    (movements.match(/>/g)?.length || 0) - // movements to the right
      (movements.match(/</g)?.length || 0)) + // movements to the left
      (movements.match(/\*/g)?.length || 0) // free movements
  return result
}

module.exports = maxDistance
