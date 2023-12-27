
const maxGifts = require('./challenge-14')

describe('Challenge 14: Maximum amount of Gifts', () => {
  it('Test 01', () => {
    expect(maxGifts([2, 4, 2])).toBe(4)
  })
  it('Test 02', () => {
    expect(maxGifts([5, 1, 1, 5])).toBe(10)
  })
  it('Test 03', () => {
    expect(maxGifts([4, 1, 1, 4, 2, 1])).toBe(9)
  })
  it('Test 04', () => {
    expect(maxGifts([1, 3, 1, 3, 100])).toBe(103)
  })
})
