const logic = shape => {
  const shapeArray = shape.split('')
  let start = 0
  let count = 0

  shapeArray.map(el => {
    if (el === 'U') {
      start++
    } else {
      start--
      if (start === -1) {
        count++
      }
    }
  })

  return count
}

module.exports = logic