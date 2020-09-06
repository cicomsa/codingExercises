const logic = text => {
  const array = text.split('a')

  for (let i = 0; i < array.length; i++) {
    if (i !== 0 && i % 2 !== 0) {
      array[i] = array[i].toUpperCase()
    }
  }

  return array.join('')
}

module.exports = logic
