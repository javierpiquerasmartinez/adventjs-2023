
const createChristmasTree = require('./challenge-10')

describe('Challenge 10: Create Christmas Tree', () => {
  it('Test 01', () => {
    expect(createChristmasTree('123', 4)).toBe(
`   1
  2 3
 1 2 3
1 2 3 1
   |
`
    )
  })
})

