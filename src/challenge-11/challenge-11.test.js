
const getIndexsForPalindrome = require('./challenge-11')

describe('Challenge 11: Get Index For Palyndrome', () => {
  it('Test 01', () => {
    expect(getIndexsForPalindrome('anna')).toStrictEqual([])
  })
  it('Test 02', () => {
    expect(getIndexsForPalindrome('abab')).toStrictEqual([0, 1])
  })
  it('Test 03', () => {
    expect(getIndexsForPalindrome('abac')).toStrictEqual(null)
  })
  it('Test 04', () => {
    expect(getIndexsForPalindrome('aaaaaaaa')).toStrictEqual([])
  })
  it('Test 05', () => {
    expect(getIndexsForPalindrome('aaababa')).toStrictEqual([1, 3])
  })
  it('Test 06', () => {
    expect(getIndexsForPalindrome('caababa')).toStrictEqual(null)
  })
})
