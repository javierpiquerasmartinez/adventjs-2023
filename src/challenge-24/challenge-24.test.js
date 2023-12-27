
const getStaircasePaths = require('./challenge-24')

describe('Challenge 24: Get Star Cases path', () => {
  it('Test 01', () => {
    expect(getStaircasePaths(2, 1)).toStrictEqual([[1, 1]])
  })
  it('Test 02', () => {
    expect(getStaircasePaths(3, 3)).toStrictEqual([[1, 1, 1], [1, 2], [2, 1], [3]])
  })
  it('Test 03', () => {
    expect(getStaircasePaths(5, 1)).toStrictEqual([[1, 1, 1, 1, 1]])
  })
  it('Test 04', () => {
    expect(getStaircasePaths(5, 2)).toStrictEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1],
    ])
  })
})
