/* 
Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. 
¿Los extraterrestres están tratando de comunicarse con ellos? 👽

El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón… 
Para asegurarse, quieren encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.
*/

function findBalancedSegment(message) {
  let largestCombination = []
  for(let i = 0; i < message.length; i++) {
    for(let j = message.length; j > i; j--) {
      let segment = message.slice(i,j)
      if(
        segment.filter(
          bit => bit === 0).length === segment.filter(bit => bit === 1).length
        && (
          (j - 1) - i > largestCombination[1] - largestCombination[0]
          || largestCombination[0] === undefined
        )
      ){
          largestCombination[0] = i
          largestCombination[1] = j - 1
      }
    }
  }
  return largestCombination
}

console.log(findBalancedSegment([1, 0, 1]))

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))

console.log(findBalancedSegment([1, 1, 0]))

console.log(findBalancedSegment([1, 1, 1]))

/*
Ten en cuenta que si hay más de un patrón equilibrado, debes devolver 
el más largo y el primero que encuentres de izquierda a derecha.

Dicen que si encuentran el patrón, podrán enviar un mensaje de vuelta a Marte 🚀. 
Parece ser que tienen que enviarlos a https://mars.codes. 
*/