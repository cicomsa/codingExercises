const logic = require('../exercises/exerciseThree')

const array = [1, 2, 3, 4, 5]
const times = 4
const result = [5, 1, 2, 3, 4,]

test("Test returns rotated array", () => {
  expect(logic(array, times)).toEqual(result)
})