const logic = (array, span) => {
  const obj = {}
  const results = []

  const splitArray = array.map(el => el.split(' '))
  splitArray.map(el => {
    if (!obj[el[0]]) obj[el[0]] = []
    obj[el[0]].push(Number(el[1]))
  })

  const keys = Object.keys(obj)

  keys.map(key => {
    if (obj[key][1] - obj[key][0] <= span) {
      results.push(key)
    }
  })

  return results
}

module.exports = logic


