//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(initialScores) {

    this.initialScores = initialScores

    this.sortedScores = [...initialScores]

    this.sortedScores.sort((a, b) => b - a)
  }

  get scores() {
    return this.initialScores
  }

  get latest() {
    // return the last element in the array
    return this.initialScores[this.initialScores.length - 1]
  }

  get personalBest() {
    return this.sortedScores[0]
  }

  get personalTopThree() {

    let rtnValue = []
    const MAX_TOP_SCORES = 3

    // take the top 3 scores or as many as we have whichever is less
    for (let cnt = 0; cnt < MAX_TOP_SCORES && cnt < this.sortedScores.length; cnt++) {
      rtnValue.push(this.sortedScores[cnt])
    }

    return rtnValue

  }
}
