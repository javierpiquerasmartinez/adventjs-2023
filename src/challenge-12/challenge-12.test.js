
const checkIsValidCopy = require('./challenge-12')

describe('Challenge 12: Check is valida copy', () => {
  it('Test 01', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')).toBe(true)
  })
  it('Test 02', () => {
    expect(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')).toBe(false)
  })
  it('Test 03', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true)
  })
  it('Test 04', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
  })
})
