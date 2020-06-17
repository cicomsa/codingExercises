const logic = shape => {
  let results = []
  let start = 0

  let value = shape.replace(/U/g, '1,')
  value = value.replace(/D/g, '-1,')

  let shapeArray = value.split(',').filter(el => el !== '')
  shapeArray = shapeArray.map(el => Number(el))

  const reduced = shapeArray.map((a, i) => {
    start += a

    if (start === -1 && a === -1) {
      results.push(start)
    }
  })

  return results.length
}

module.exports = logic