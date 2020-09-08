//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {

  // get date in terms of miliseconds
  let milSec = startDate.getTime()

  // add the number of milisecods that equal 1 gigasecod
  milSec += (1000000000000) // 1000 miliseconds times 1 billion seconds

  // convert back to date

  // return date
  return new Date(milSec)
};
