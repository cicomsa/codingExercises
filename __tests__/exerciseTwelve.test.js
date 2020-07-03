const logic = require('../exercises/exerciseTwelve')

const array = [
  [
    ['a', 'b'],
    ['c',
      ['d', 'e',
        ['f']
      ]
    ]
  ],
  'g'
]
const result = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

test("Returns a flattened array out of a multiple nested array", () => {
  expect(logic(array)).toEqual(result)
})
