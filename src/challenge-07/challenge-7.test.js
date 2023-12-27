
const drawGift = require('./challenge-07')

describe('Challenge 07: Draw Christmas Gift', () => {
  it('Test01', () => {
    expect(drawGift(4, '+')).toBe(
      `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`
    )
  })
  it('Test01', () => {
    expect(drawGift(5, '*')).toBe(
      `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`
    )
  })
})
