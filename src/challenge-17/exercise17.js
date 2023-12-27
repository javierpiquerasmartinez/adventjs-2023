/* 
En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. 
Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y el segundo es el final.

Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7. 
El problema es que a veces los intervalos se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.

Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, 
escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados:
*/

function optimizeIntervals(intervals) {
  let sortedIntervals = intervals.sort(((a, b) => a[0] - b[0]))
  for(let i = 1; i < sortedIntervals.length; i++){
    if(sortedIntervals[i][0] > sortedIntervals[i-1][1]) continue
    if(sortedIntervals[i][0] < sortedIntervals[i-1][1] 
        && sortedIntervals[i][1] <= sortedIntervals[i-1][1]){
      sortedIntervals[i] = sortedIntervals[i-1]
      sortedIntervals[i-1] = null
      continue
    }
    sortedIntervals[i][0] = sortedIntervals[i-1][0]
    sortedIntervals[i-1] = null
  }
  sortedIntervals = sortedIntervals.filter(x => x!==null)
  return [...sortedIntervals]
}

console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]

console.log(optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]]))