
function calculateTime(deliveries) {
  let totalSeconds = 0
  let targetSeconds = 7 * 60 * 60

  for(let delivery of deliveries) {
    let deliveryTime = delivery.split(':')
    totalSeconds = 
      totalSeconds + 
      (deliveryTime[0] * 60 * 60) + 
      (deliveryTime[1] * 60) + 
      (deliveryTime[2] * 1)
  }

  let difference = totalSeconds - targetSeconds

  let hoursOutput = Math.floor(Math.abs(difference) / 3600)
  hoursOutput = 
    (hoursOutput < 10) ? '0' + hoursOutput : hoursOutput.toString()
  let minutesOutput = Math.floor((Math.abs(difference)%3600)/60)
  minutesOutput = 
    (minutesOutput < 10) ? '0' + minutesOutput : minutesOutput.toString()
  let sencondsOutput = Math.abs(difference)%60
  sencondsOutput = 
    (sencondsOutput < 10) ? '0' + sencondsOutput : sencondsOutput.toString()
  let sign = (difference < 0) ? '-' : ''
  return `${sign}${hoursOutput}:${minutesOutput}:${sencondsOutput}`
}

module.exports = calculateTime
