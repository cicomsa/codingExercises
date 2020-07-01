const logic = array => {
  let sortedArray = [...array].sort((a, b) => a - b)
  let chaotic = false, bribes = 0

  for (let i = 0; i < array.length; i++) {
    if (sortedArray[i] !== array[i]) {
      const oldIndex = sortedArray.indexOf(array[i])
      const diff = oldIndex - i

      if (diff > 2) {
        chaotic = true
        break
      }

      bribes += diff

      sortedArray.splice(oldIndex, 1)
      sortedArray.splice(i, 0, array[i])
    }
  }

  const result = chaotic ? 'Too chaotic' : bribes

  return result
}

module.exports = logic


// const logic = (queue) => {
//   let bribes = 0, i, j;
//   for (i = 0; i < queue.length; i++) {
//     const moved = i + 1;
//     console.log(queue[i], Math.max(0, queue[i] - 2))
//     if (queue[i] - moved > 2) { return "Too chaotic" }

//     for (j = Math.max(0, queue[i] - 2); j < i; j++) {
//       if (queue[j] > queue[i]) { bribes++ }
//     }
//   }
//   return bribes;
// }
