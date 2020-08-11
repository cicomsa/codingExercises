const logic = num => {
  const s = String(num);
  return s.length - s.replace(/0*$/, '').length;
  // /^0*/ - beginning of string
}

module.exports = logic
