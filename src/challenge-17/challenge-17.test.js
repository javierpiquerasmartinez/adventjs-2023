
const optimizeIntervals = require('./challenge-17')

describe('Challenge 17: Optimize Intervals', () => {
  it('Test 01', () => {
    expect(optimizeIntervals([[5, 8], [2, 7], [3, 4]])).toStrictEqual([[2, 8]])
  })
  it('Test 01', () => {
    expect(optimizeIntervals([[1, 3], [8, 10], [2, 6]])).toStrictEqual([[1, 6], [8, 10]])
  })
  it('Test 01', () => {
    expect(optimizeIntervals([[3, 4], [1, 2], [5, 6]])).toStrictEqual([[1, 2], [3, 4], [5, 6]])
  })
})
