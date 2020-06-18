const logic = require('../exercises/exerciseFour')

const array1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]
const result1 = 19

const array2 = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]
const result2 = 0

test("Test returns the highest sum of the hourglass", () => {
  expect(logic(array1)).toEqual(result1)
  expect(logic(array2)).toEqual(result2)
})
