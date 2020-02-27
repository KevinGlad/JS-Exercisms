//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (alpha) => {

  let result = []
  let resultCols = 0

  for (let row = 0; row < alpha.length; row++) {

    if (alpha[row].length > resultCols) {

      resultCols = alpha[row].length
    }

  }

  for (let col = 0; col < resultCols; col++) {

    result.push('')

  }

  for (let col = 0; col < resultCols; col++) {

    for (let row = 0; row < alpha.length; row++) {

      let newRow = alpha[row]

      if (col > newRow.length - 1) {

        result[col] += ' '

      }
      else {

        result[col] += newRow[col]

      }

    } // each row

  } //  each col

  if (result.length > 0) {
    result[result.length - 1] = result[result.length - 1].trimEnd()
  }

  return result
};
