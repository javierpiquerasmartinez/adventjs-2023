/* 
En el taller de Santa, los elfos aman los acertijos 🧠. 
Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. 
Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

--> Si ya es un palíndromo, un array vacío.
-->  Si no es posible, null.
--> Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
*/

function getIndexsForPalindrome(word) {
  const checkPalindrome = (w) => {
    return w === w.split('').reverse().join('')
  }
  if(checkPalindrome(word)) return []
  
  for(let i = 0; i < word.length; i++) {
    for(let j = i; j < word.length; j++) {
      let wordArray = word.split('');
      [wordArray[i], wordArray[j]] = [wordArray[j] , wordArray[i]]
      if(checkPalindrome(wordArray.join(''))) return [i, j]
    }
  }
  return null
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null