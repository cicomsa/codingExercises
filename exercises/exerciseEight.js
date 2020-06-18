const logic = (s, n) => {
  if (s === 'a') return n
  if (!s.includes('a')) return 0

  const array = []
  const sLenght = s.length
  const times = Math.floor(n / sLenght)

  const splitString = s.split('')
  const aArrayLength = splitString.filter(el => el === 'a').length

  let aTimes = times * aArrayLength

  const remainder = n - (times * sLenght)

  splitString.map((el, i) => {
    if (i < remainder && el === 'a') array.push(el)
  })

  aTimes += array.length

  return aTimes
}

module.exports = logic

// 51574523448
