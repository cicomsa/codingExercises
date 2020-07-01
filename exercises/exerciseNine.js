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

// let count = -1
// let i = 0
// while (i < c.length) {
//   count += 1
//   if (i < c.length - 2 && c[i + 2] == 0) i += 1
//   i += 1
// }
// return count

// let jumps = 0
// for (let i = 0; i < c.length - 1; i++) {
//   if (c[i] === 1) {
//     continue
//   } else if ((c[i + 1] == 0 && c[i + 2] == 0)) {
//     i += 1;
//   }
//   jumps++
// }
// return jumps


module.exports = logic