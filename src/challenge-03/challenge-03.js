
function findNaughtyStep(original, modified) {
  const bigger = (original.length > modified.length) ? original : modified
  const smaller = (original.length <= modified.length) ? original : modified
  return [...bigger].find((process, i) => {
    return process !== smaller[i]
  }) || ''
}

function findNaughtyStep2(original, modified) {
  let bigger
  let smaller
  if(original.length > modified.length) {
    bigger = original
    smaller = modified
  } else {
    bigger = modified
    smaller = original
  }
  return [...bigger].find((process, i) => {
    return process !== smaller[i]
  }) || ''
}

module.exports = { findNaughtyStep, findNaughtyStep2 }