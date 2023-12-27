const findFirstRepeated = require('./challenge-01')

describe('Challenge 01: find the first ID number that has been repeated', () => {
	it('Test 01', () => {
		const giftIds = [2, 1, 3, 5, 3, 2]
		const firstRepeatedId = findFirstRepeated(giftIds)
		expect(firstRepeatedId).toBe(3)
	})

	it('Test 02', () => {
		const giftIds = [1, 2, 3, 4]
		const firstRepeatedId = findFirstRepeated(giftIds)
		expect(firstRepeatedId).toBe(-1)
	})

	it('Test 03', () => {
		const giftIds = [5, 1, 5, 1]
		const firstRepeatedId = findFirstRepeated(giftIds)
		expect(firstRepeatedId).toBe(5)
	})
})