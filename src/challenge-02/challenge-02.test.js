const {manufacture, manufacture2} = require('./challenge-02')

describe('Challenge 02: find the presents that can be manufactured', () => {
  it('Test 01', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    expect(manufacture(gifts, materials)).toStrictEqual(['tren', 'oso'])
    expect(manufacture2(gifts, materials)).toStrictEqual(['tren', 'oso'])
  })
  it('Test 02', () => {
    const gifts = ['juego', 'puzzle']
    const materials = 'jlepuz'
    expect(manufacture(gifts, materials)).toStrictEqual(["puzzle"])
    expect(manufacture2(gifts, materials)).toStrictEqual(["puzzle"])
  })
  it('Test 03', () => {
    const gifts = ['libro', 'ps5']
    const materials = 'psli'
    expect(manufacture(gifts, materials)).toStrictEqual([])
    expect(manufacture2(gifts, materials)).toStrictEqual([])
  })
})