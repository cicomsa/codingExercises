const logic = arr => {
  let arrays = []
  let sum = []

  arr.map((array, i) => {
    if (array && arr[i + 1] && arr[i + 2])
      arrays.push([array, arr[i + 1], arr[i + 2]])

  })

  arrays.map(a => {
    for (let i = 0; i < a[0].length; i++) {
      const sumArray1 = a[0][i + 2] !== undefined
        ? a[0][i] + a[0][i + 1] + a[0][i + 2]
        : null
      const sumArray2 = a[1][i + 1] !== undefined
        ? a[1][i + 1]
        : null
      const sumArray3 = a[2][i + 1] !== undefined
        ? a[2][i] + a[2][i + 1] + a[2][i + 2]
        : null

      if (sumArray1 !== null)
        sum.push(sumArray1 + sumArray2 + sumArray3)
    }
  })

  const result = Math.max(...sum)

  return result
}

module.exports = logic