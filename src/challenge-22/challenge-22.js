
function compile(code) {
  code = code.split('')
  let avoidConditionalBlock = false
  let operations = ''
  let returnPoint = false

  return code.reduce((counter, operation) => {
    operations = returnPoint ? operations + operation : ''
    if(!avoidConditionalBlock) {
      switch (operation) {
        case '+':
          counter++
          break;
        case '*':
          counter = counter*2
          break
        case '-':
          counter--
          break
        case '%':
          returnPoint = true
          operations = ''
          break
        case '<':
          counter = counter + compile(operations)
          returnPoint = false
          break
        case '¿':
          if(counter <= 0) avoidConditionalBlock = true
          break
      }
    }
    if(operation === '?') avoidConditionalBlock = false
    return counter
  }, 0)
}

module.exports = compile