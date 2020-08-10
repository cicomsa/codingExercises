const logic = require('../exercises/exerciseThirteen')

const num1 = 0
const result1 = 1
const num2 = 245
const result2 = 0
const num3 = 40
const result3 = 1
const num4 = 40300
const result4 = 2

test("Returns the number of zeros that can be found at the end of a number", () => {
  expect(logic(num1)).toEqual(result1)
  expect(logic(num2)).toEqual(result2)
  expect(logic(num3)).toEqual(result3)
  expect(logic(num4)).toEqual(result4)
})

