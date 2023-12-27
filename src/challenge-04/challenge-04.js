
function decode(message) {
  const fragment = message.match(/\(([^()]+)\)/)
  if(!fragment) return message
  const matchReversed = fragment[0].split('').slice(1, -1).reverse().join('')
  return decode(message.replace(fragment[0], matchReversed))
}

module.exports = decode