//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Main function
export function primeFactors (num) {

  let factors = []; // array to hold results
  let remainder = num; // initialize remainder with passed in num
  let nextPrime = getPrime(); // create our prime number generator

  // look at each prime number and see if it is a factor
  do {

    // get the next prime number
    let prime = nextPrime.next().value;

    // is this prime number a factor
    if (remainder % prime === 0) {

      // save factor in answer array
      factors.push(prime)

      remainder = remainder / prime;

      // reset our prime number enerator

      nextPrime = getPrime();

    }

  } while (remainder > 1)

  return factors
}

// generator function to create prime numbers
function* getPrime() {

  // intialize values
  let prime = 2;
  let isPrime = true;

  // infinate loop.  Prime numberes are generated without limit
  while (true) {

    // is prime a prime number
    for (let factor = 2; factor < prime; factor++) {
      if (prime % factor === 0) {
        isPrime = false;
        break;
      }
    }

    // if it is a prime number stop the function and return
    if (isPrime) {
      yield prime;
    }

    // go to next number
    prime++;

    // reset isPrime to inital state
    isPrime = true;
  }

};

