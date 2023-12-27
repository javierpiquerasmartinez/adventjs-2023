
function manufacture(gifts, materials) {
  const res = []
  for(let gift of gifts) {
    let giftMaterials = gift.split('')
    let hasMaterials = giftMaterials.every(material => materials.includes(material))
    if (hasMaterials) res.push(gift)
  }
  return res
}

function manufacture2(gifts, materials){
  return gifts.filter(gift => {
    return gift.split('').every(material => materials.includes(material))
  })
}

module.exports = {manufacture, manufacture2}
