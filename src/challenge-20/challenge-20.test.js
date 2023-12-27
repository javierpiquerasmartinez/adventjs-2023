
const distributeGifts = require('./challenge-20')

describe('Challenge 20: Distribute Gifts', () => {
  it('Test 01', () => {
    const input = [
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4]
    ]
    expect(distributeGifts(input)).toStrictEqual([
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4]
    ])
  })
})
