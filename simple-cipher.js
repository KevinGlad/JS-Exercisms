//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// "iamapandabear"  "ldpdsdqgdehdu".
//     abcdefghijklmnopqrstuvwxyz
//  abcdefghijklmnopqrstuvwxyz
// if no key is given, key is a
// need a way to know the position of a letter in the alphabet
// we need a way of getting a new letter given a start letter and an offset
// we need a way to handle key shorter than the encoding string
// we need a way to handle adding an offset past the end of our alphabet, e.g. z + 2

function getAlphaPos(char, alpha) {

  return alpha.indexOf(char)
}

function getKeyChar(pos, key) {

  // check to see if the pos is greater than the length of the key
  // e.g. if pos is 3 but the key is "a"
  let keyPos = pos
  // subtract the length of the key from the pos until pos < key
  while (keyPos >= key.length) {

    keyPos -= key.length

  }

  return key[keyPos]

}

function getCypherCar(charPos, keyPos, alpha) {

  let newPos = charPos + keyPos

  while (newPos >= alpha.length) {

    newPos -= alpha.length

  }

  return alpha[newPos]

}

function getOrgCar(charPos, keyPos, alpha) {

  let newPos = charPos - keyPos

  while (newPos < 0) {

    newPos += alpha.length

  }

  return alpha[newPos]

}

export class Cipher {
  constructor(key = "aaaaaaaaaa") {

    // convert incoming key string to an array for easier shifting and index finding
    this._key = key.toLowerCase().split("")
    this.alpha = "abcdefghijklmnopqrstuvwxyz".split("")

  }

  encode(encodeStr) {

    let rtnVal = ""
    for (let pos = 0; pos < encodeStr.length; pos++) {
      let char = encodeStr[pos]

      // find letter in key that matches the position of letter in encodeStr
      // if position in encdoeStr is > length of key, start over at begining of key
      let keyChar = getKeyChar(pos, this._key)

      // look up value of letter from key in alphabet array to get shift value
      // create an array of letters of the alphabet
      let charPos = getAlphaPos(char.toLowerCase(), this.alpha)
      let keyPos = getAlphaPos(keyChar, this.alpha)

      // add shift value to orginal letter
      // if original letter plus shift value is > the length of alphabet, start over a front of alphabet
      rtnVal += getCypherCar(charPos, keyPos, this.alpha)

    }

    return rtnVal
  }

  decode(decodeStr) {

    let rtnVal = ""
    for (let pos = 0; pos < decodeStr.length; pos++) {
      let char = decodeStr[pos]

      // find letter in key that matches the position of letter in encodeStr
      // if position in encdoeStr is > length of key, start over at begining of key
      let keyChar = getKeyChar(pos, this._key)

      // look up value of letter from key in alphabet array to get shift value
      // create an array of letters of the alphabet
      let charPos = getAlphaPos(char.toLowerCase(), this.alpha)
      let keyPos = getAlphaPos(keyChar, this.alpha)

      // add shift value to orginal letter
      // if original letter plus shift value is > the length of alphabet, start over a front of alphabet
      rtnVal += getOrgCar(charPos, keyPos, this.alpha)

    }

    return rtnVal
  }

  get key() {
    return this._key.join("")
  }
}
