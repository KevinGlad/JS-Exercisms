//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ROW_CHAR ="\n"  // character that defines row seperation
const COL_CHAR = " "  // character that defines col seperation

// accept text with rows seperated by newline and cols seperated by space
function textToRows(text) {

  let rtnValue = []

  // bring in data
  // seperate string into row arrays
  // str Data '1 2\n3 4'
  // go through string and seperate into arrays at row char
  let strRows = text.split(ROW_CHAR)

  // str Rows is now ['1 2','3 4']
  // go through each row array and seperate at space
  for (let row of strRows) {

    let tmpNum = [] // place to store converted strings to numbers

    // '1 2'  - first pass example
    // '3 4'  - second pass example
    // split on col char
    let tmpStr = row.split(COL_CHAR)
    // tmpStr = ['1','2'] - first pass example
    // tmpStr = ['3','4'] - second pass example

    // convert from strings to integers
    for (let strNum of tmpStr) {
      tmpNum.push(Number.parseInt(strNum))
    }
    // tmpNum [1,2] - first pass example
    // tmpNum [3,4] - second pass example

    // add my numbers to my numRows array
    rtnValue.push(tmpNum)
    // numRows [[1,2]] - first pass example
    // numRows [[1,2],[3,4]] - second pass example
  }

  return rtnValue
}

function rowsToCols(rowArray) {

  let rtnValue = []
  // what is wanted is [[1,2],[3,4]]
  // 1 2
  // 3 4
  // 4 6
  // seperate row arrays into columns
  // what is wanted is [[1,3],[2,4]]

  // get the length of my columns and loop through all my rows
  // once for each colum.
  // we use the first row to set the col length and assume
  // all rows have the same number of columns
  for (let col = 0; col < rowArray[0].length; col++) {

    // create a place to store my colum data
    let tmpCol = []

    // go through each row of the array
    for (let row of rowArray) {

      // save the value for this column on this row
      tmpCol.push(row[col])
    }

    // save the entire column to our column array
    rtnValue.push(tmpCol)
  }

  return rtnValue
}


export class Matrix {
  constructor(strData) {

    this.numRows = textToRows(strData)
    this.numCols = rowsToCols(this.numRows)

  }

  get rows() {
    return this.numRows
  }

  get columns() {
    return this.numCols
  }
}
