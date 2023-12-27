
const travelDistance = require('./challenge-25')

describe('Challenge 25: Travel Distance', () => {
  it('Test 01', () => {
    const map = `.....1....
    ..S.......
    ..........
    ....3.....
    ......2...`
    expect(travelDistance(map)).toBe(12)
  })
  it('Test 02', () => {
    expect(travelDistance('..S.1...')).toBe(2)
  })
})
