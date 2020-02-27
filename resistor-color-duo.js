//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (resistorColors) => {
  let colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]
  let rtnValue = ''
  const conversionBase = 10

  for (let color of resistorColors) {

    rtnValue += ((colors.indexOf(color)).toString())

  }

  return parseInt(rtnValue,conversionBase)

};
