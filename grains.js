import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants"

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Grains {
  square(num) {
    let expn = BigInt(num-1)
    let numn = BigInt(2)

    return (numn**expn).toString()
  }

  total() {
    
    let rtnValuen = BigInt(0)

    for (let intCnt = 1; intCnt < 65; intCnt++) {

      rtnValuen = rtnValuen + BigInt(this.square(intCnt))

    }

    return rtnValuen.toString()
  }
}
