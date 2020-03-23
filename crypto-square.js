//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// initializing all values during construction
// multiple calls will not have to re-generate these numbers
function normalizeText(text) {

  // probably a better regx than this but this works
  return text.replace(/[\s#$%^&!,.(){}]/gi, "").toLowerCase()
}

function getColumns(normalizedText) {

  let rtnValue = 1

  // set our default number of rows to 2 because that works
  for (let rows = 2; rows < normalizedText.length; rows++) {

    // be sure to round to the nearest interger value
    let cols = Math.round(normalizedText.length / rows)

    // do we pass the test found in the spec
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

    // we are going to store the results so multiple
    // queries don't require us to re-build everything
    // passed in string has spaces and non-alpha numeric chars
    this.normalizedText = normalizeText(orgString)

    // get the calculated columns
    this.cols = getColumns(this.normalizedText)

    // store the final square
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

        // check to see if we have undefined values in 
        // last row. i.e. the last row is shorter than the rest.
        if (this.square[row][col] != undefined) {
          rtnValue += this.square[row][col]
        }

      }
    }

    return rtnValue
  }
}
