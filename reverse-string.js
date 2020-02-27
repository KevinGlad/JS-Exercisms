//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (normalString) => {
  
  let myArray = Array.from(normalString)
  return myArray.reduce((rtnValue,char) => {

    return char + rtnValue
    
  },"")
};

