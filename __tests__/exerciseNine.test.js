const logic = require('../exercises/exerciseNine')

const array1 = [0, 1, 0, 0, 0, 1, 0]
const result1 = 3

const array2 = [0, 0, 1, 0, 0, 1, 0]
const result2 = 4

const array3 = [0, 0, 0, 0, 1, 0,]
const result3 = 3

const array4 = [
  0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
  1, 0, 0, 0, 1, 0, 0, 1, 0, 0,
  0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 1, 0, 1, 0, 0
]
const result4 = 28

test("Returns the shortest total number of jumps", () => {
  expect(logic(array1)).toEqual(result1)
  expect(logic(array2)).toEqual(result2)
  expect(logic(array3)).toEqual(result3)
  expect(logic(array4)).toEqual(result4)
})