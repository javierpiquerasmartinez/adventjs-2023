const transformTree = require('./challenge-16')

describe('Challenge 16: Transform Tree',  () => {
  it('Test 01', () => {
    expect(transformTree([3, 1, 0, 8, 12, null, 1])).toStrictEqual(
      {
        value: 3,
        left: {
          value: 1,
          left: {
            value: 8,
            left: null,
            right: null
          },
          right: {
            value: 12,
            left: null,
            right: null
          }
        },
        right: {
          value: 0,
          left: null,
          right: {
            value: 1,
            left: null,
            right: null
          }
        }
      }
    )
  })
})
