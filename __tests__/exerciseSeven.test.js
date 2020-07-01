const logic = require('../exercises/exerciseSeven')

const n = 6
const result = 5

test("Returns the last number of the fibonacci list of numbers", () => {
  expect(logic(n)).toEqual(result)
})