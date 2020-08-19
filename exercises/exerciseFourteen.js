const logic = text => {
  const array = text.trim().split(' ')
  let result

  array.map(str => {
    if (result === undefined && /[a-zA-Z]+/.test(str) === true) {
      result = str
    }
  })

  if (/([.,\/#!$%\^&\*;:{}=\-_`~()\]\[])/g.test(result)) {
    result = result.replace(/([.,\/#!$%\^&\*;:{}=\-_`~()\]\[])/g, " ")

    if (result.includes(' ')) {
      const strArray = result.split(' ')
      result = strArray[0]
    }
  }

  return result;
}

module.exports = logic
