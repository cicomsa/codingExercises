const logic = array =>
  array.reduce((flattenedList, i) =>
    flattenedList.concat(Array.isArray(i) ? logic(i) : i)
    , [])

module.exports = logic
