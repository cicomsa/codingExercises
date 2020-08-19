const logic = require('../exercises/exerciseFourteen')

const text1 = "Don't speak... I know just what you're saying"
const result1 = "Don't"
const text2 = "Hello World"
const result2 = "Hello"
const text3 = "Hello.World"
const result3 = "Hello"
const text4 = " a word "
const result4 = "a"
const text5 = "don't touch it"
const result5 = "don't"
const text6 = "greetings, friends"
const result6 = "greetings"
const text7 = "... and so on ..."
const result7 = "and"
const text8 = "hi"
const result8 = "hi"

test("Returns the first word of the string", () => {
  expect(logic(text1)).toEqual(result1)
  expect(logic(text2)).toEqual(result2)
  expect(logic(text3)).toEqual(result3)
  expect(logic(text4)).toEqual(result4)
  expect(logic(text5)).toEqual(result5)
  expect(logic(text6)).toEqual(result6)
  expect(logic(text7)).toEqual(result7)
  expect(logic(text8)).toEqual(result8)
})

