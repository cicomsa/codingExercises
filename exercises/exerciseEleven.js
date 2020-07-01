const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

const logic = array => {
  let sum1 = 0, sum2 = 0

  array.map((el, i) => {
    let index = i
    sum1 += el[index]
  })

  array.map((el, i) => {
    let index = (el.length - 1) - i
    sum2 += el[index]
  })

  const result = Math.abs(sum1 - sum2)

  return result
}

logic(array)

module.exports = logic