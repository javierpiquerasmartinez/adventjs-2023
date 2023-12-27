/* 
¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .
*/

function revealSabotage(store) {
  let result = []
  for(let i = 0; i < store.length; i++) {
    result[i] = new Array(store[i].length).fill(0)
    for(let j = 0; j < store[i].length; j++) {
      if(store[i][j] === '*') {
        result[i][j] = '*'
        continue
      }
      if(store[i-1] && store[i-1][j-1] === '*') {
        result[i][j]++
      }
      if(store[i-1] && store[i-1][j] === '*') {
        result[i][j]++
      }
      if(store[i-1] && store[i-1][j+1] === '*') {
        result[i][j]++
      }
      if(store[i][j-1] === '*') {
        result[i][j]++
      }
      if(store[i][j+1] === '*') {
        result[i][j]++
      }
      if(store[i+1] && store[i+1][j-1] === '*') {
        result[i][j]++
      }
      if(store[i+1] && store[i+1][j] === '*') {
        result[i][j]++
      }
      if(store[i+1] && store[i+1][j+1] === '*') {
        result[i][j]++
      }
      result[i][j] = result[i][j] === 0 ? ' ' : result[i][j].toString()
    }
  }
  return result
}

console.log(revealSabotage([
  ['*', ' ', '*']
]))

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/