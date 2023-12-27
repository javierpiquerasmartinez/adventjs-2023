
function adjustLights(lights) {
  let current = '🟢'
  let errors = 0
  for(const light of lights){
    errors = (light === current)? errors : errors + 1
    current = (current ==='🟢')? '🔴': '🟢'
  }
  if(errors > lights.length / 2) errors = lights.length - errors
  return errors
}

module.exports = adjustLights
