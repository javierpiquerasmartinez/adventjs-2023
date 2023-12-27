/* 
Estamos programando unos robots llamados giftbot 🤖🎁 
que navegan de forma autónoma por los almacenes de regalos.

Estamos creando una función a la que le pasamos: 
el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

El almacén se representa como un array de cadenas de texto, donde:

. significa que hay vía libre.
* significa que hay un obstáculo.
! es la posición inicial del robot.
Los movimientos son un array de cadenas de texto, donde:

R mueve al robot una posición a la derecha.
L mueve al robot una posición a la izquierda.
U mueve al robot una posición hacia arriba.
D mueve al robot una posición hacia abajo.
Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.
*/

function autonomousDrive(store, movements) {
  let robotI = [-1, -1]
  let storeTransformed = store.map((floor, index) => {
    let result = floor.split('')
    let position = result.indexOf('!')
    if(position > -1) {
      robotI = [index, position]
      result[index, position] = '.'
    } 
    return result
  })
  for(let move of movements) {
    if(move === 'R' && 
      storeTransformed[robotI[0]] && 
      storeTransformed[robotI[0]][robotI[1] + 1] === '.'){
      robotI[1]++
      continue
    }
    if(move === 'L' && 
      storeTransformed[robotI[0]] && 
      storeTransformed[robotI[0]][robotI[1] - 1] === '.') {
      robotI[1]--
      continue
    } 
    if(move === 'U' && 
      storeTransformed[robotI[0] - 1] && 
      storeTransformed[robotI[0] - 1][robotI[1]] === '.') {
      robotI[0]--
      continue
    }
    if(move === 'D'&& 
      storeTransformed[robotI[0] + 1] && 
      storeTransformed[robotI[0] + 1][robotI[1]] === '.') {
      robotI[0]++
      continue
    }
  }
  storeTransformed[robotI[0]][robotI[1]] = '!'
  storeTransformed = storeTransformed.map(floor => floor.join(''))
  return storeTransformed
}

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)

/* '..!....', 
   '...*.*.' 
*/

/*
[
  ".......",
  "...*!*."
]
*/

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.