const logic = require('../exercises/exerciseSixteen')

const text1 = 'Why are you asking me that?'
const result1 = 'Why RE YOU sking me thT?'
const text2 = 'Always wanted to visit Zambia.'
const result2 = 'AlwYS Wnted to visit ZMBI.'

test("Returns an edited version of text based on a given rule", () => {
  expect(logic(text1)).toEqual(result1)
  expect(logic(text2)).toEqual(result2)
})
