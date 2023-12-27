
function findFirstRepeated(gifts) {
  return gifts.find((id, i) => gifts.indexOf(id) !== i) ?? -1
}

module.exports = findFirstRepeated