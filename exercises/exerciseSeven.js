const logic = n => {
  const array = []
  let a = 0
  let b = 1
  let c

  while (true) {
    if (!array.length)
      array.push(a) && array.push(b)
    c = a + b
    a = b
    b = c
    array.push(c)
    if (array.length === n) break
  }

  return array[n - 1]
}

module.exports = logic