//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (yearToCheck) => {

  let rtnValue = false

  // check to see if we are divisible by 4
  if (yearToCheck % 4 === 0) {

    // it is not a leap year if it is divisible by 100 except when it is divisible by 400
    // make sure it is not divisible by 100 and if it is it is also divisible by 400
    if (yearToCheck % 100 !== 0) {

      rtnValue = true

    } else if (yearToCheck % 400 === 0) {

      rtnValue = true

    }
  }

  return rtnValue
};


