/* 
¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los platos sean únicos y variados!

Te da una lista de platos navideños donde cada elemento consiste en una lista de strings que comienza con el nombre del plato, seguido de todos los ingredientes utilizados para su preparación.

Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.

Así que devolvemos un array de arrays donde la primera posición es el nombre del ingrediente y el resto los nombres de los platos.

Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.
*/

function organizeChristmasDinner(dishes) {
  let dishesIsolated = []
  let ingredients = []
  for(let dish of dishes) {
    dishesIsolated = dishesIsolated.concat(dish[0])
    ingredients = ingredients.concat(dish.slice(1))
  }

  ingredients = new Set(ingredients)

  const containsIngredient = (ingredient) => {
    return dishes.reduce((dishes, dish) => {
      if(dish.find(ing => ing === ingredient)) return dishes.concat(dish[0]) 
      return dishes
    }, [])
  }
  let result = []
  for(let ing of ingredients) {
    result = result.concat([[ing, ...containsIngredient(ing)]])
  }
  result = result.filter(ingredient => ingredient.length > 2)

  result = result.map(ingredient => {
    let res = [ingredient[0], ...ingredient.slice(1).sort()]
    return res
  })

  result = result.sort((x, y) => {
    if(x > y) return 1
    if(x === y) return 0
    return -1
  })

  return result
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner([
  ["fruit salad", "apple", "banana", "orange"],
  ["berry smoothie", "blueberry", "banana", "milk"],
  ["apple pie", "apple", "sugar", "flour"]
]))

console.log(organizeChristmasDinner(dishes))

console.log(organizeChristmasDinner([
  ["gingerbread", "flour", "ginger", "sugar"],
  ["glazed ham", "ham", "honey", "sugar", "vinegar"],
  ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
  ["vegetable soup", "carrot", "potato", "onion", "garlic"],
  ["fruit punch", "apple juice", "orange juice", "sugar"]
]))

/*

"sauce" está en 2 platos: "christmas turkey" y "pizza".
"sugar" está en 2 platos: "cake" y "hot chocolate".
El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
Y los platos de cada ingrediente también están ordenados alfabéticamente.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]

*/
