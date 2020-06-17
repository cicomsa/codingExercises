
const logic = require('../logicTwo')

const array = ['99 1 sign_in', '100 10 sign_in', '50 20 sign_in', '100 15 sign_out', '50 26 sign_out', '99 2 sign_out']
const span = 5
const result = ['99', '100']

test("Test returns only the users who's time is less than span", () => {
  expect(logic(array, span)).toEqual(result);
})