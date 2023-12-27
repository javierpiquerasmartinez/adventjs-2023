/* 
¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 
personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol 
y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica 
hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, 
la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:
   1
  2 3
 1 2 3
1 2 3 1
   |
*/

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

console.log(createChristmasTree('kenza', 10))