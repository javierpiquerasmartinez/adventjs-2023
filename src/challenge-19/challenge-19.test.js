
const revealSabotage = require('./challenge-19')

describe('Challenge 19: Reveal Sabotage', () => {
  it('Test 01', () => {
    const store = [
      ['*', ' ', ' ', ' '],
      [' ', ' ', '*', ' '],
      [' ', ' ', ' ', ' '],
      ['*', ' ', ' ', ' ']
    ]
    expect(revealSabotage(store)).toStrictEqual([
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
    ])
  })
})
