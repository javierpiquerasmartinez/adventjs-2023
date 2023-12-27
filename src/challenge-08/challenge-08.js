
function organizeGifts(gifts) {
  if(!gifts) return ''
  const amounts = gifts.match(/\d+/g)
  const presents = gifts.match(/[a-z]/g)
  let result = ''
  for(let i = 0; i < amounts.length; i++) {
    let pale = Math.floor(amounts[i] / 50)
    result = result.concat(`${`[${presents[i]}]`.repeat(pale)}`)
    let box = Math.floor((amounts[i]%50) / 10)
    result = result.concat(`${`{${presents[i]}}`.repeat(box)}`)
    let bag = amounts[i]%10
    if(bag) result = result.concat(`(${presents[i].repeat(bag)})`)
  }
  return result
}

module.exports = organizeGifts
