
function createChristmasTree(ornaments, height) {
  let treeOrnaments = ornaments.split('')
  let christmasTree = ''
  for(let i = 1; i <= height; i++){
    christmasTree = christmasTree.concat(' '.repeat(height - i))
    for(let j = 1; j<=i; j++){
      let ornament = treeOrnaments.shift()
      christmasTree = (j===i) ? 
        christmasTree.concat(ornament).concat('\n') : 
        christmasTree.concat(ornament).concat(' ')
      treeOrnaments.push(ornament)
    }
  }

  christmasTree = christmasTree.concat(' '.repeat(height - 1)).concat('|\n')
  return christmasTree
}

module.exports = createChristmasTree
