const logic = require('../exercises/exerciseSix')

const shape1 = 'UDDDUDUU'
const result1 = 1
const shape2 = 'DDUUDDUDUUUD'
const result2 = 2
const shape3 = 'UDUUUDUDDD'
const result3 = 0

test("Returns the number of times the sum of the values fell under 0", () => {
  expect(logic(shape1)).toEqual(result1)
  expect(logic(shape2)).toEqual(result2)
  expect(logic(shape3)).toEqual(result3)
})

