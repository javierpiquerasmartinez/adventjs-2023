
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

module.exports = organizeChristmasDinner
