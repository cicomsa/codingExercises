const logic = array => {
  const results = array.reduce((results, e, i) => {
    if (array[i + 2] === 0 && i !== results[results.length - 1] - 1) {
      results.push(i + 2)
    } else if (array[i + 1] === 0) {
      if (!results.includes(i + 1)) results.push(i + 1)
    }
    return results
  }, [])

  return results.length
}

module.exports = logic