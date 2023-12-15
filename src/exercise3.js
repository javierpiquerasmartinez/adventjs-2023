/* 
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified 
que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido 
o eliminado en la cadena de fabricación. 
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

function findNaughtyStep(original, modified) {
    const bigger = (original.length > modified.length) ? original : modified
    const smaller = (original.length <= modified.length) ? original : modified
    return [...bigger].find((process, i) => {
        return process !== smaller[i]
    }) || ''
}

/* 
const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'
 */
/* 
const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'f'
 */
/* 
const original = 'abcde'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // ''
 */