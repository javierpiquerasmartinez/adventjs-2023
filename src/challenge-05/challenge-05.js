
function cyberReindeer(road, time) {
  const snapshots = [road]
  let currentStep = '.'

  for(let i = 1; i < time; i++) {
    if(i === 5) road = road.replaceAll('|', '*')

    const canMove = road.match(/S[*.]/g)
    if(canMove) {
      road = road.replace(canMove[0], currentStep + 'S')
      currentStep = canMove[0][1]
    }
    snapshots.push(road)
  }
  return snapshots
}

module.exports = cyberReindeer
