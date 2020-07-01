const logic = require('../exercises/exerciseEleven')

const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

result = 15

test("Returns the absolute difference of the diagonals sum", () => {
  expect(logic(array)).toEqual(result)
})