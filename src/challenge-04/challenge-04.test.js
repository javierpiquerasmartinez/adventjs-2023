const decode = require('./challenge-04')

describe('Challenge 04: Revert the chars inside the ()', () => {
  it('Test 01', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
  })
  it('Test 02', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
  })
  it('Test 03', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
  })
})
