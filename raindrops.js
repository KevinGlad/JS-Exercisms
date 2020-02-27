//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let tests = [{num: 3, word: "Pling"},{num: 5, word: "Plang"},{num: 7, word: "Plong"}]

export const convert = (number) => {
  
  let rtnValue = ""

  for (let test of tests) {
    if (number % test.num === 0) {
      rtnValue += test.word
    }
  }

  if (rtnValue === "") {
    rtnValue = number.toString()
  }
  
  return rtnValue
};
