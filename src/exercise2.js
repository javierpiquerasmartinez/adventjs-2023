function manufacture(gifts, materials) {
    const res = []
    for(let gift of gifts) {
        let giftMaterials = gift.split('')
        let hasMaterials = giftMaterials.every(material => materials.includes(material))
        if (hasMaterials) res.push(gift)
    }
    return res
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
manufacture(gifts, materials)