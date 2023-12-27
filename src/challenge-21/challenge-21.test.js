const findBalancedSegment = require('./challenge-21')

describe('Challenge 21: Find balanced Segment', () => {
  it('Test 01', () => {
    expect(findBalancedSegment([1, 0, 1])).toStrictEqual([0, 1])
  })
  it('Test 02', () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toStrictEqual([2, 5])
  })
  it('Test 03', () => {
    expect(findBalancedSegment([1, 1, 0])).toStrictEqual([1, 2])
  })
  it('Test 04', () => {
    expect(findBalancedSegment([1, 1, 1])).toStrictEqual([])
  })
})
