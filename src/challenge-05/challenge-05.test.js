const cyberReindeer = require('./challenge-05')

describe('Challenge 05: Cyber Reindeer', ()=> {
  it('Test01', () => {
    const road = 'S..|...|..'
    const time = 10
    expect(cyberReindeer(road, time)).toStrictEqual([
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..',
    ])
  })
})

