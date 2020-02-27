//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Coin {
  constructor(value, target) {
    this.max = ~~(target / value) // int only portion
    this.count = 0
    this.value = value

    if (this.max === 0) {
      this.done = true
    } else {
      this.done = false
    }
  }

  increment() {
    this.count++
    if (this.count > this.max) {
      this.count = 0
    }
    return this.count
  }

  amount() {
    return this.value * this.count
  }
}

export class Change {

  calculate(coinArray, target) {

    let coins = []
    let combos = []
    for (let coin of coinArray) {
      coins.push(new Coin(coin, target))
    }

    while (!coins.every((coin) => { return coin.done === true })) {

      let { sum } = coins.reduce((accumulator, coin, index, array) => {
        let rollover = false
        let sum = accumulator.sum
        // previous coin rolled over
        if (!coin.done) {
          if (accumulator.rollover === true) {
            coin.increment()
            if (coin.count === 0) {
              rollover = true
            }
          }
          // see if we are done with this coin
          if (rollover === true) {
            if (index === array.length - 1) {
              coin.done = true
            } else {
              if (array[index + 1].done === true) {
                coin.done = true
              }
            }
            
          }
          sum += coin.amount()
        } // end if done

        return { rollover, sum }

      }, { rollover: true, sum: 0 })

      if (sum === target) {
        let combo = coins.reduce((accumulator, coin) => {
          let result = accumulator;
          if (!coin.done) {
            result = result.concat(Array(coin.count).fill(coin.value))
          };

          return result
        }, [])
        if (combo.length > 0) {
          combos.push(combo)
        }
      }

    } // end while all !done
    // sort array of answers
    combos.sort((combo1, combo2) => { return combo1.length - combo2.length })

    return combos[0]
  } // end calculate
}