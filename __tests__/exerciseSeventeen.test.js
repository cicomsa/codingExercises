const logic = require('../exercises/exerciseSeventeen')

const text = 'Lorem ipsum dolor sit amet!'
const result = 'm'

test("Return the most common letter in the alphabetical order", () => {
  expect(logic(text)).toEqual(result)
})
