function toLine(name) {
  return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}

function LetterNumtoLine(name) {
  return name.replace(/([A-Z0-9])/g,"_$1").toLowerCase();
}

module.exports = {
  toLine,
  LetterNumtoLine,
}