const logic = items => {
  let array = []
  const result = []
  const data = {}
  items.map(item => data[item] = { counts: 0, index: '' })

  const results = items.reduce((results, item, index) => {
    if (items[index] === item) {
      results[item].counts += 1
      if (results[item].index === '') results[item].index = index
    }
    return results
  }, data)

  const keys = Object.keys(results)

  keys.map(key => {
    for (let i = 0; i < results[key].counts; i++) {
      const item = /^-{0,1}\d+$/.test(key) ? Number(key) : key

      array.push([item, results[key].counts, results[key].index])
    }
  })

  array = array.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;

    if (a[2] > b[2]) return 1;
    if (a[2] < b[2]) return -1;
  })

  array.map(el => result.push(el[0]))

  return result
}

module.exports = logic
