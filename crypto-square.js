//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function normalizeText(text) {

  return text.replace(/[\s#$%^&!,.(){}]/gi, "").toLowerCase()
}

function getColumns(normalizedText) {

  let rtnValue = 1

  for (let rows = 2; rows < normalizedText.length; rows++) {

    let cols = Math.round(normalizedText.length / rows)

    if (cols >= rows && cols - rows <= 1) {
      rtnValue = cols
      break // out of loop
    }
  }
  return rtnValue
}

function makeSquare(text, cols) {
  let square = []

  for (let pos = 0; pos < text.length; pos += cols) {
    square.push(text.slice(pos, pos + cols))
  }

  return square
}

export class Crypto {
  constructor(orgString) {

    // passed in string has spaces and non-alpha numeric chars
    this.normalizedText = normalizeText(orgString)
    this.cols = getColumns(this.normalizedText)
    this.square = makeSquare(this.normalizedText, this.cols)
  }

  normalizePlaintext() {

    return this.normalizedText

  }

  size() {

    return this.cols

  }

  plaintextSegments() {
    return this.square
  }

  ciphertext() {
    let rtnValue = ""

    for (let col = 0; col < this.cols; col++) {

      for (let row = 0; row < this.square.length; row++) {

        if (this.square[row][col] != undefined) {
          rtnValue += this.square[row][col]
        }

      }
    }

    return rtnValue
  }
}
