const logic = num => {
  const s = String(num);
  console.log(s.replace(/0*$/, '').length)
  return s.length - s.replace(/0*$/, '').length;
}

module.exports = logic
