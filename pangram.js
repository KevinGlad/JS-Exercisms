//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (phrase) => {
  let  letters = "abcdefghijklmnopqrstuvwxyz"
  let compare = phrase.toLowerCase()
  let found = true

  for (let letter of letters) {

    found = found && compare.includes(letter)

    if (found == false) {
      break
    }

  }

  return found

};
