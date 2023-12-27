
const autonomousDrive = require('./challenge-15')

describe('Challenge 15: Autonomous Drive', () => {
  it('test 01', () => {
    const store = ['..!....', '...*.*.']
    const movements = ['R', 'R', 'D', 'L']
    expect(autonomousDrive(store, movements)).toStrictEqual(
      [
        ".......",
        "...*!*."
      ]
    )
  })
})
