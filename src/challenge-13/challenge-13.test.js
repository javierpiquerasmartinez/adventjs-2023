
const calculateTime = require('./challenge-13')

describe('Challenge 13: Calculate Time', () => {
  it('Test 01', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('-02:20:00')
  })
  it('Test 02', () => {
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00')
  })
  it('Test 03', () => {
    expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toBe('-05:29:00')
  })
})
