const organizeGifts = require('./challenge-08')

describe('Challenge 08: Organize Gifts', () => {
  it('Test 01', () => {
    expect(organizeGifts('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)')
  })
})

