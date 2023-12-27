
const adjustLights = require('./challenge-09')

describe('Challenge 09: Adjust Lights', () => {
  it('Test01', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1)
  })
  it('Test02', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toBe(1)
  })
  it('Test03', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2)
  })
  it('Test04', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)
  })
  it('Test05', () => {
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1)
  })
})
