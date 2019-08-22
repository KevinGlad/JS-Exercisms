//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function primeFactors (num) {
  let factors = [];
  let remainder = num;
  let nextPrime = getPrime();

  do {
    let prime = nextPrime.next().value;
    if (remainder % prime === 0) {
      factors.push(prime)
      remainder = remainder / prime;
      nextPrime = getPrime();
      // console.log({prime, factors})
    }
    // console.log(remainder)
  } while (remainder > 1)

  return factors
}

function* getPrime() {
  let prime = 2;
  let isPrime = true;

  while (true) {
    for (let x = 2; x < prime; x++) {
      if (prime % x === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      yield prime;
    }
    prime++;
    isPrime = true;
  }

};

