const array = [10, 20, 20, 10, 10, 30, 50, 10, 20]

const logic = array => {
  let result = 0

  const unique = array.reduce((unique, item) => {
    if (!unique[item]) unique[item] = []
    unique[item] = [...unique[item], item]

    return unique
  }, {})

  const keys = Object.keys(unique)

  keys.map(key => {
    const value = unique[key].length / 2
    result += Math.floor(value)
  })

  return result
}

module.exports = logic
