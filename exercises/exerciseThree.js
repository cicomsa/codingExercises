const logic = (array, times) => {
  for (let i = 0; i < times; i++) {
    const firstEl = array.shift()
    array.push(firstEl)
  }

  return array
}

module.exports = logic
