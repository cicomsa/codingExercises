const logic = array => {
  const results = []

  const sortedArray = array.map(el => el.split('').sort().join(''))

  sortedArray.reduce((unique, item, i) => {
    if (unique.includes(item)) {
      return unique
    } else {
      results.push(array[i])
      return [...unique, item]
    }
  }, [])

  return results
}

module.exports = logic

