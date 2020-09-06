const logic = text => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const splitText = text.toLowerCase().split('')
  let counts = {}

  splitText.map(el => {
    if (alphabet.includes(el)) counts[el] = 0
  })

  counts = splitText.reduce((counts, el, i) => {
    if (alphabet.includes(el)) counts[el] += 1

    return counts
  }, counts)

  const alphaSorted = Object.keys(counts)
    .sort()
    .reduce((acc, key) => ({
      ...acc, [key]: counts[key]
    }), {})

  const keys = [...Object.keys(alphaSorted)]
  let result = Object.keys(alphaSorted).sort((a, b) => alphaSorted[b] - alphaSorted[a])

  if (result.join('') === keys.join('')) {
    result = result.sort()
  }

  console.log(result, Object.keys(alphaSorted))

  return result[0];
}

module.exports = logic
