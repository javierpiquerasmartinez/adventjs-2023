/* En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. 

Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo. */

function manufacture(gifts, materials) {
    const res = []
    for(let gift of gifts) {
        let giftMaterials = gift.split('')
        let hasMaterials = giftMaterials.every(material => materials.includes(material))
        if (hasMaterials) res.push(gift)
    }
    return res
}

// A better option would be to use the isSubset() method of Set, still experimental

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
manufacture(gifts, materials)
