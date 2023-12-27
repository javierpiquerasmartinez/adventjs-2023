const {findNaughtyStep, findNaughtyStep2} = require('./challenge-03')

describe('Challenge 03: Identify the wrong step', () => {
  it('Test 01', () => {
    const original = 'abcd'
    const modified = 'abcde'
    expect(findNaughtyStep(original, modified)).toBe('e')
    expect(findNaughtyStep2(original, modified)).toBe('e')
  })
  it('Test 02', () => {
    const original = 'stepfor'
    const modified = 'stepor'
    expect(findNaughtyStep(original, modified)).toBe('f')
    expect(findNaughtyStep2(original, modified)).toBe('f')
  })
  it('Test 03', () => {
    const original = 'abcde'
    const modified = 'abcde'
    expect(findNaughtyStep(original, modified)).toBe('')
    expect(findNaughtyStep2(original, modified)).toBe('')
  })
})