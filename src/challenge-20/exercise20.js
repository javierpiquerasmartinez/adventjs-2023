/* 
¡Tenemos problemas con la carga de los juguetes en el trineo 🛷 de Santa 🎅! 
Parece que la distribución de los juguetes no es la adecuada y el trineo no puede despegar. 
¿Podrías ayudarnos a resolver este problema?

Para solucionarlo hemos decidido utilizar un método similar al de un filtro de imágenes. 
En cada posición, vamos a distribuir la carga de los juguetes en función del número de juguetes de las posiciones vecinas.

Una posición vecina es aquella que está encima, abajo, a la izquierda o a la derecha de la posición actual. 
Por lo tanto, no se consideran vecinas las posiciones en diagonal.

Escribe una función distributeGifts que reciba una matriz de números representando los juguetes en el trineo 
y devuelva otra matriz con el mismo tamaño y número de elementos pero donde cada elemento es el promedio de su valor original y los valores de sus vecinos.

Ten en cuenta que hay posiciones que son null y que no contarán para el promedio como vecino pero sí se sustituirá por el valor promedio de sus vecinos.
*/

function distributeGifts(weights) {
  let result = new Array(weights.length)
  for(let i = 0; i < weights.length; i++) {
    result[i] = new Array(weights[i].length).fill(0)
    result[i] = result[i].map((_, index) => {
      let res = weights[i][index] || 0
      let divideBy = weights[i][index] ? 1 : 0
      if(weights[i - 1]) {
        res += weights[i - 1][index]
        divideBy += (weights[i - 1][index]) ? 1 : 0
      } 
      if(weights[i + 1]) {
        res += weights[i + 1][index]
        divideBy += (weights[i + 1][index]) ? 1 : 0
      } 
      if(weights[i][index - 1]) {
        res += weights[i][index - 1]
        divideBy += (weights[i][index - 1]) ? 1 : 0
      } 
      if(weights[i][index + 1]) {
        res += weights[i][index + 1]
        divideBy += (weights[i][index + 1]) ? 1 : 0
      } 
      return Math.round(res / divideBy)
    });
  }
  return result
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

console.log(distributeGifts(input))

// Resultado paso a paso de los primeros cálculos:

// En la posición [0][0] tenemos el valor 4
// Sus vecinos son los valores 5 y 6
// (4 + 5 + 6) / 3 = 5

// En la posición [0][1] tenemos el valor 5
// Sus vecinos son los valores 4 y 1
// (5 + 4 + 1) / 3 = 3.33
// Math.round(3.33) = 3

// En la posición [0][2] tenemos el valor 1
// Sus vecinos son los valores 5 y 3
// (1 + 5 + 3) / 3 = 3

// En la posición [1][0] tenemos el valor 6
// Sus vecinos son los valores 4, 8
// (6 + 4 + 8 ) / 3 = 6

// En la posición [1][1] tenemos el valor null
// Sus vecinos son los valores 5, 6 y 3
// (5 + 6 + 3) / 3 = 4.66
// Math.round(4.66) = 5
// ... y así con el resto de posiciones
/* [
  [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
  [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
  [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
] */

// Resultado final tras redondear con Math.round()
/* [
  [5, 3, 3],
  [6, 5, 3],
  [7, 6, 4]
] */