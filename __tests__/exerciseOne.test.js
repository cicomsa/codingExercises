
const logic = require('../exercises/exerciseOne')

const array1 = ["code", "anagrams", "aangrams", "cdoe", "que"]
const result1 = ["code", "anagrams", "que"]

const array2 = ["code", "anagrams", "aangrams", "cdoe", "que", "qeu"]
const result2 = ["code", "anagrams", "que"]

const array3 = ["code", "anagrams", "aangrams", "cdoe", "Que", "qeu"]
const result3 = ["code", "anagrams", "Que", "qeu"]

test('Test returns only the first matched values', () => {
  expect(logic(array1)).toEqual(result1)
  expect(logic(array2)).toEqual(result2)
  expect(logic(array3)).toEqual(result3)
})