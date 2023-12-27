
const organizeChristmasDinner = require('./challenge-23')

describe('Challenge 23: Organize Christmas Dinner', () => {
  it('Test 01', () => {
    expect(organizeChristmasDinner([
      ['christmas turkey', 'turkey', 'sauce', 'herbs'],
      ['cake', 'flour', 'sugar', 'egg'],
      ['hot chocolate', 'chocolate', 'milk', 'sugar'],
      ['pizza', 'sauce', 'tomato', 'cheese', 'ham']]))
      .toStrictEqual([
        ['sauce', 'christmas turkey', 'pizza'],
        ['sugar', 'cake', 'hot chocolate']]
      )
  })
})
