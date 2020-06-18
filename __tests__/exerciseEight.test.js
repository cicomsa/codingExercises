const logic = require('../exercises/exerciseEight')

const string1 = 'aba'
const number1 = 10
const result1 = 7

const string2 = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'
const number2 = 736778906400
const result2 = 51574523448

const string3 = 'a'
const number3 = 1000
const result3 = 1000

const string4 = 'sdfsd'
const number4 = 1000
const result4 = 0

test("Test returns pair number of common values", () => {
  expect(logic(string1, number1)).toEqual(result1)
  expect(logic(string2, number2)).toEqual(result2)
  expect(logic(string3, number3)).toEqual(result3)
  expect(logic(string4, number4)).toEqual(result4)
})