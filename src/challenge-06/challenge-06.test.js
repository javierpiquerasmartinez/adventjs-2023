
const maxDistance = require('./challenge-06')

describe('Challenge 06: The Maximum Distance', () => {
  it('Test 01', () => {
    const movements = '>>*<'
    expect(maxDistance(movements)).toBe(2)
  })
  it('Test 02', () => {
    const movements = '<<<>'
    expect(maxDistance(movements)).toBe(2)
  })
  it('Test 03', () => {
    const movements = '>***>'
    expect(maxDistance(movements)).toBe(5)
  })
})
