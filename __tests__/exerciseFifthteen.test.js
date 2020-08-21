const logic = require('../exercises/exerciseFifthteen')

const array1 = [4, 6, 2, 2, 6, 4, 4, 4]
const result1 = [4, 4, 4, 4, 6, 6, 2, 2]
const array2 = ['bob', 'bob', 'carl', 'alex', 'bob']
const result2 = ['bob', 'bob', 'bob', 'carl', 'alex']
const array3 = []
const result3 = []
const array4 = [1]
const result4 = [1]

test("Returns pair number of common values", () => {
  expect(logic(array1)).toEqual(result1)
  expect(logic(array2)).toEqual(result2)
  expect(logic(array3)).toEqual(result3)
  expect(logic(array4)).toEqual(result4)
})
