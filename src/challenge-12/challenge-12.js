
function checkIsValidCopy(original, copy) {
  for(let i = 0; i < original.length; i++) {
    const char = original[i].match(/\w/g)
    const isValid = `${char ? `${char}${char[0].toLowerCase()}` : ''}#+:. `

    if(isValid.indexOf(copy[i]) < isValid.indexOf(original[i])) return false
  }
  return true
}

module.exports = checkIsValidCopy
