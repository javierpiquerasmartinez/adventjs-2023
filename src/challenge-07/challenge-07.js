
function drawGift(size, symbol) {
  if(size === 1) return '#\n'
  const rows = []

  //We set the special rows
  rows[0] = '#'.repeat(size).padStart(size * 2 - 1)
  rows[size - 1] = '#'.repeat(size).concat(`${symbol.repeat(size - 2)}#`)
  rows[size * 2 - 2] = '#'.repeat(size)
  
  //We follow the pattern
  for(let i = 1; i < size - 1; i++) {
    rows[i] = `#${symbol.repeat(size - 2)}#${symbol.repeat(i - 1)}#`
      .padStart(size * 2 - 1)
    rows[size * 2 - 2 - i] = 
      `#${symbol.repeat(size - 2)}#${symbol.repeat(i - 1)}#`
  }

  return rows.join('\n').concat('\n')
}

module.exports = drawGift
