
function transformTree(tree) {
  let index = arguments[1] || 0
  if(tree[index] === null  || tree[index] === undefined) return null
  return {
    value: tree[index],
    left: transformTree(tree, (index * 2) + 1),
    right: transformTree(tree, (index * 2) + 2)
  }
}
module.exports = transformTree