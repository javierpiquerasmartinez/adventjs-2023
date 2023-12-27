
function travelDistance(map) {
  const mapArr = map.split('\n').map((value) => value.trim())

  let santaY = mapArr.findIndex((value) => value.includes('S'))
  let santaX = mapArr[santaY].indexOf('S')

  let i = 1
  let distance = 0
  let cond = true
  while (cond) {
    const childY = mapArr.findIndex((value) => value.includes(i.toString()))
    if (childY === -1) break

    const childX = mapArr[childY].indexOf(i.toString())

    const aY = Math.max(santaY, childY)
    const bY = Math.min(santaY, childY)
    const Ydistance = aY - bY

    const aX = Math.max(santaX, childX)
    const bX = Math.min(santaX, childX)
    const Xdistance = aX - bX

    distance += Ydistance + Xdistance
    ;[santaY, santaX] = [childY, childX]
    i++
  }

  return distance
}

module.exports = travelDistance
