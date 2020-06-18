const logic = require('../exercises/exerciseFive')

const array = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const result = 3

test("Test returns pair number of common values", () => {
  expect(logic(array)).toEqual(result)
})
