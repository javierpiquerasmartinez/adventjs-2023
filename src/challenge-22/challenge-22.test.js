
const compile = require('./challenge-22')

describe('Challenge 22: Compile', () => {
  it('Test 01', () => {
    expect(compile('-+¿+?')).toBe(0)
  })
  it('Test 01', () => {
    expect(compile('-+%<¿+?')).toBe(0)
  })
  it('Test 01', () => {
    expect(compile('-+%¿+-?<¿+?')).toBe(0)
  })
  it('Test 01', () => {
    expect(compile('-+%¿++-?+<¿+?')).toBe(3)
  })
  it('Test 01', () => {
    expect(compile('++%++<++%++%++<++<')).toBe(16)
  })
  it('Test 01', () => {
    expect(compile('++*-')).toBe(3)
  })
  it('Test 01', () => {
    expect(compile('++%++<')).toBe(6)
  })
  it('Test 01', () => {
    expect(compile('++<--')).toBe(0)
  })
  it('Test 01', () => {
    expect(compile('++¿+?')).toBe(3)
  })
  it('Test 01', () => {
    expect(compile('--¿+++?')).toBe(-2)
  })
})
